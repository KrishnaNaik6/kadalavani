import React from 'react';
import propTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={authenticated ? <Element /> : <Navigate to='/login' replace />}
    />
  );
};

PrivateRoute.propTypes = {
  element: propTypes.node.isRequired,
};
export default PrivateRoute;
