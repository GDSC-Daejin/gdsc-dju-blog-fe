import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from '../components/PrivateRoute';
import Footer from '../components/Footer';
import SideBar from '../components/common/SideBar';
import Category from '../pages/Category';
import SearchResult from '../pages/SearchResult';
import MyBlog from '../pages/MyBlog';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Modal from '../components/common/modal';
import Alert from '../components/common/Alert';
import SignUp from '../pages/SignUp';
import OauthRedirectPage from '../pages/OauthRedirectPage';
import DeskNavigation from '../components/common/Navigation/DeskNavigation';

const Layout = () => {
  const [loader] = useRecoilState(loaderState);

  return (
    <>
      <Alert />
      <Modal />
      <SideBar />
      <Navigation />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:user_name/*'} element={<MyBlog />} />
        <Route path={'/post'} element={<Post />} />
        <Route path={'/category/:categoryName'} element={<Category />} />
        <Route path={'/search'} element={<SearchResult />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/oauth2/redirect'} element={<OauthRedirectPage />} />
        <Route path={'/search'} element={<SearchResult />} />
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
