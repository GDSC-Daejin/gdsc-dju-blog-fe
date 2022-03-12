import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';
import SetTheme from '../hooks/SetTheme';
import PrivateRoute from '../components/PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const MyBlog = lazy(() => import('../pages/MyBlog'));
const Posts = lazy(() => import('../pages/Posts'));

const Layout = () => {
  const [loader] = useRecoilState(loaderState);
  return (
    <>
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <Suspense fallback={<GoogleLoader background={false} />}>
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/:user_name/*'} element={<MyBlog />} />
          <Route path={'/post'} element={<Posts />} />
          <Route
            path={'/admin'}
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default Layout;
