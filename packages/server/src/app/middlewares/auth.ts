import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { verifyToken } from '../../utils/jwtUtils';
import User from '../models/User';

export default async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response<undefined>> {
  const userRepository = getRepository(User);
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).send({ error: 'No token provided' });

  const [scheme, token] = String(authHeader).split(' ');

  const decoded = await verifyToken(token);

  const user = await userRepository.findOne(decoded?.id);

  if (!user && !decoded)
    return response.status(401).send({ error: 'Token invalid' });

  request.headers.userId = String(decoded?.id);

  return next();
}
