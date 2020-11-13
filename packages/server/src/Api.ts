import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import path from 'path';

import errorHandler from './errors/handler';
import routes from './routes';

import './database/connection';

export default class Api {
  server: Express;

  constructor() {
    this.server = express();
    this.cors();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  cors(): void {
    this.server.use(cors());
    /* set optional cors
    {
      origin:'http://host'
    }
    */
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use('/v1', routes);
    this.server.use(
      '/uploads',
      express.static(path.join(__dirname, '..', 'uploads'))
    );
  }

  exceptionHandler(): void {
    this.server.use(errorHandler);
  }

  init(): void {
    const port = process.env.PORT_APP || 3333;
    this.server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running in port: ${port}`);
    });
  }
}
