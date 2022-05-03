import React from 'react';
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
import Posts from '../pages/Post';
import SignUp from '../pages/SignUp';
import OauthRedirectPage from '../pages/OauthRedirectPage';

const Layout = () => {
  const [loader] = useRecoilState(loaderState);

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
        <Route path={'/category/:categoryName'} element={<Category />} />
        <Route path={'/search'} element={<SearchResult />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/oauth2/redirect'} element={<OauthRedirectPage />} />
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
