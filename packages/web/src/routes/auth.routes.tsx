import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import CreateOrphanage from '../pages/CreateOrphanages';

const AppRoutes: React.FC = () => {
  const { signed } = useAuth();

  if (!signed) return <Redirect to="/login" />;

  return (
    <>
      <Route path="/orphanages-create" component={CreateOrphanage} />
    </>
  );
};

export default AppRoutes;
