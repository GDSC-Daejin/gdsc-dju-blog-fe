import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleSpinner from '../components/common/GoogleSpinner';
import { GlobalStyle } from '../styles/globalStyle';
const Home = lazy(() => import('../pages/Home'));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<GoogleSpinner />}>
        <Routes>
          <Route path={'/*'} element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Layout;
