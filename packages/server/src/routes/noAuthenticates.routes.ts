import express from 'express';

import AuthController from '../app/controllers/AuthController';
import OrphanagesController from '../app/controllers/OrphanagesController';

const noAuthenticatesRoutes = express.Router();

noAuthenticatesRoutes
  .get('/', (request, response) => {
    return response.send('Hello Next Level Week #3.0');
  })
  .post('/register', AuthController.register)
  .post('/login', AuthController.login)
  .get('/orphanages', OrphanagesController.index)
  .get('/orphanages/:id', OrphanagesController.show);

export default noAuthenticatesRoutes;
