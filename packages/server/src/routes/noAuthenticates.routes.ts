import express from 'express';

import AuthController from '../app/controllers/AuthController';

const noAuthenticatesRoutes = express.Router();

noAuthenticatesRoutes
  .get('/', (request, response) => {
    return response.send('Hello Next Level Week #3.0');
  })
  .post('/register', AuthController.register)
  .post('/login', AuthController.login);

export default noAuthenticatesRoutes;
