import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirecttoHome = () => {
  return <Navigate to="/" replace />;
};

export default RedirecttoHome;