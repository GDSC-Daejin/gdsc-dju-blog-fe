import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleLoader from '../components/common/GoogleLoader';
import { useRecoilState } from 'recoil';
import { loaderState } from '../store/loader';
import { AnimatePresence } from 'framer-motion';
import SetTheme from '../hooks/SetTheme';

const Home = lazy(() => import('../pages/Home'));
const MyBlog = lazy(() => import('../pages/MyBlog'));

const Layout = () => {
  const [loader] = useRecoilState(loaderState);
  return (
    <>
      <SetTheme />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
        <Suspense fallback={<GoogleLoader background={false} />}>
          <Routes>
            <Route path={'/*'} element={<Home />} />
            <Route path={'/:user_name'} element={<MyBlog />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default Layout;
