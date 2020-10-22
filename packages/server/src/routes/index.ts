import express from 'express';
import multer from 'multer';

import OrphanagesController from '../app/controllers/OrphanagesController';
import uploadConfig from '../config/upload';

const routes = express.Router();
const upload = multer(uploadConfig);

// Rotas
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.delete('/orphanages/:orphanage_id', OrphanagesController.delete);

export default routes;
