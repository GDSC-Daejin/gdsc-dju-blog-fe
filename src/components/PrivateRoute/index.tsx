import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';

function PrivateRoute({ children }: any) {
  // const auth = localStorage.getItem('auth');
  const auth = false;
  return <>{auth ? children : <Navigate to={'/signin'} />}</>;
}

export default PrivateRoute;
