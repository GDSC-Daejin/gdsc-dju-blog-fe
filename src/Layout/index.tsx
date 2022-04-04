import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from '../components/PrivateRoute';
import Footer from '../components/Footer';
import SideBar from '../components/common/SideBar';
import CategoryDetail from '../pages/Category/CategoryDetail';
import API from '../api';
import Category from '../pages/Category';
import SearchResult from '../pages/SearchResult';
import { userState } from '../store/user';
import PostWrite from '../pages/PostWrite';
import MyBlog from '../pages/MyBlog';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

const Layout = () => {
  const [loader] = useRecoilState(loaderState);
  // const { userData } = useGetUserData();
  const [user, setUser] = useRecoilState(userState);
  const forceLogin = async () => {
    await API.postForceLogin();
    const res = await API.getUserData();
    const userData = res.data.body.data;
    setUser({
      ...user,
      ...userData.memberInfo,
      name: userData.username,
      email: userData.email,
    });
  };
  useEffect(() => {
    forceLogin();
    //로그인 정보 가져오기
  }, []);

  return (
    <>
      <SideBar />
      <Navigation />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:user_name/*'} element={<MyBlog />} />
        <Route path={'/post'} element={<Posts />} />
        <Route path={'/post/write'} element={<PostWrite />} />
        <Route path={'/category/*'} element={<Category />} />
        <Route path={'/category/:id'} element={<CategoryDetail />} />
        <Route path={'/search'} element={<SearchResult />} />
        <Route
          path={'/admin'}
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
