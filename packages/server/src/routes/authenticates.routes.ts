import express from 'express';
import multer from 'multer';

import OrphanagesController from '../app/controllers/OrphanagesController';
import UserController from '../app/controllers/UsersController';
import authMiddleware from '../app/middlewares/auth';
import uploadConfig from '../config/upload';

const authenticatesRoutes = express.Router();
const upload = multer(uploadConfig);

// Autenticação do Header Authorization em todas as rotas
authenticatesRoutes.use(authMiddleware);

/**
 * Rotas /api/users/
 * default Controllers = index, show, create, update, delete
 */
authenticatesRoutes
  .get('/users', UserController.index)
  .get('/users/:user_id', UserController.show)
  .post('/users', UserController.create)
  .put('/users/:user_id/edit', UserController.update)
  .delete('/users/:user_id', UserController.delete);

/**
 * Rota /api/orphanages/
 */
authenticatesRoutes
  .post('/orphanages', upload.array('images'), OrphanagesController.create)
  .put('/orphanages/:id/edit', OrphanagesController.update)
  .delete('/orphanages/:orphanage_id', OrphanagesController.delete);

export default authenticatesRoutes;
