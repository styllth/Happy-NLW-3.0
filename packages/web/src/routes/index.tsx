import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOrphanage from '../pages/CreateOrphanages';
import Lading from '../pages/Landing';
import OrphanageDetails from '../pages/OrphanageDetails';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Lading} />
        <Route path="/orphanages-map" component={OrphanagesMap} />
        <Route path="/orphanages-create" component={CreateOrphanage} />
        <Route path="/orphanages-details/:id" component={OrphanageDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
