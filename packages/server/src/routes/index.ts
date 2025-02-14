import express from 'express';

import authenticatesRoutes from './authenticates.routes';
import noAuthenticatesRoutes from './noAuthenticates.routes';

const routes = express.Router();

// rotas não autenticadas
routes.use(noAuthenticatesRoutes);

// rotas autenticadas
routes.use(authenticatesRoutes);

export default routes;
