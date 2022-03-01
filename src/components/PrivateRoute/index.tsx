import React from 'react';
import { Navigate, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

type Iprops = {
  Element: React.ComponentType<any>;
  path: string;
};
const PrivateRoute = ({ auth, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
