import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';

import PrivateRoute from '../components/PrivateRoute';
import Footer from '../components/Footer';

const Home = lazy(() => import('../pages/Home'));
const MyBlog = lazy(() => import('../pages/MyBlog'));
const Post = lazy(() => import('../pages/Post'));

const Layout = () => {
  const [loader] = useRecoilState(loaderState);
  return (
    <>
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
        <Suspense fallback={<GoogleLoader background={false} />}>
          <Routes>
            <Route path={'/*'} element={<Home />} />
            <Route path={'/:user_name/*'} element={<MyBlog />} />
            <Route path={'/post'} element={<Post />} />
            <Route
              path={'/admin'}
              element={
                <PrivateRoute>
                  <Post />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
