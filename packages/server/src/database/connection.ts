import 'reflect-metadata';

import { createConnection } from 'typeorm';

import * as configJson from '../../ormconfig.json';

createConnection(configJson)
  .then(async (connection) => console.log('conectado ao DB'))
  .catch((error) => console.log(error));
