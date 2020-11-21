import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';
import AuthRoutes from './auth.routes';
import NoAuthRoutes from './noAuth.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  // if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Switch>{signed ? <AuthRoutes /> : <NoAuthRoutes />}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
