import React from 'react';
import { Route } from 'react-router-dom';

import Landing from '../pages/Landing';
// import Cadastrate from '../pages/Login/Cadastrate';
// import CadastrateSucess from '../pages/Login/CadastrateSuccess';
// import ForgotLogin from '../pages/Login/ForgotLogin';
import Login from '../pages/Login';
import OrphanageDetails from '../pages/OrphanageDetails';
import OrphanagesMap from '../pages/OrphanagesMap';

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} default />
      {/* <Route path="/login/forgot" component={ForgotLogin} />
      <Route exact path="/cadastrate" component={Cadastrate} />
      <Route exact path="/cadastrateSuccess" component={CadastrateSucess} /> */}
      <Route path="/orphanages-map" component={OrphanagesMap} />
      <Route path="/orphanages-details/:id" component={OrphanageDetails} />
      <Route path="*" component={Login} />
    </>
  );
};

export default AuthRoutes;
