import React, { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from '../components/PrivateRoute';
import Footer from '../components/Footer';
import API from '../api';
import Category from '../pages/Category';
import SearchResult from '../pages/SearchResult';
import { useGetUserData } from '../api/hooks/useGetUserData';
import { userState } from '../store/user';

const Home = lazy(() => import('../pages/Home'));
const MyBlog = lazy(() => import('../pages/MyBlog'));
const Posts = lazy(() => import('../pages/Posts'));

const Layout = () => {
  const [loader] = useRecoilState(loaderState);
  // const { userData } = useGetUserData();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    API.postForceLogin().then((res) => {
      API.getUserData().then((res) => {
        const userData = res.data;
        setUser({
          ...user,
          ...userData.memberInfo,
          name: userData.username,
          email: userData.email,
        });
      });
    });
    // if (localStorage.getItem('token')) {
    //   if (userData) {
    //     setUser({
    //       ...user,
    //       ...userData.memberInfo,
    //       name: userData.username,
    //       email: userData.email,
    //     });
    //   }

    //로그인 정보 가져오기
  }, []);

  return (
    <>
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:user_name/*'} element={<MyBlog />} />
        <Route path={'/post'} element={<Posts />} />
        <Route path={'/category'} element={<Category />} />
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
