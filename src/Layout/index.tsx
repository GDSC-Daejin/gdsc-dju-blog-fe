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
import API from '../api';
import SearchResult from '../pages/SearchResult';
import { userState } from '../store/user';
import PostWrite from '../pages/PostWrite';
import MyBlog from '../pages/MyBlog';
import Home from '../pages/Home';
import Post from '../pages/Post';
import PostEdit from '../pages/PostEdit';
import ScrollTop from '../Utils/ScrollTop';
import Modal from '../components/common/modal';
import Category from '../pages/Category';
import PostSaves from '../pages/PostSaves';

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
      <Modal />
      <SideBar />
      <Navigation />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>

      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:user_name/*'} element={<MyBlog />} />
        <Route path={'/post/write'} element={<PostWrite />} />
        <Route path={'/post/write/:postId'} element={<PostEdit />} />
        <Route path={'/category/*'} element={<Category />} />
        <Route path={'/category/:categoryName'} element={<Category />} />
        <Route path={'/search'} element={<SearchResult />} />
        <Route path={'/post/saves'} element={<PostSaves />} />
        <Route
          path={'/admin'}
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
