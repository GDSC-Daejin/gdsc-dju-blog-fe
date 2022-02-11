import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleSpinner from '../components/common/GoogleSpinner';
import Login from '../pages/Home/Login';

const Home = lazy(() => import('../pages/Home'));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<GoogleSpinner />}>
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Layout;
