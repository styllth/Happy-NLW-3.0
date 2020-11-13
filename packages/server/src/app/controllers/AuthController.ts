/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import { compareHash, generateHash, generateToken } from '../../utils/jwtUtils';
import User from '../models/User';
import userViwer from '../views/users_view';

class AuthController {
  async login(
    request: Request,
    response: Response
  ): Promise<Response<unknown>> {
    const { email, password } = request.body;
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) return response.status(401).json({ error: 'User not found' });

    const assignUser = await compareHash(user.password, String(password));

    if (!assignUser) response.status(401).json({ error: 'Invalid password' });

    return response.json({
      user: userViwer.render(user),
      token: generateToken(Number(user.id)),
    });
  }

  async register(
    request: Request,
    response: Response
  ): Promise<Response<unknown>> {
    const userRepository = getRepository(User);
    const { name, email, password } = request.body;

    const verifyUser = await userRepository.findOne({ where: { email } });

    if (verifyUser)
      return response.status(400).json({ error: 'User already exists' });

    const userData = { name, email, password };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(userData, {
      abortEarly: false,
    });

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);

    return response.status(201).json(userViwer.render(newUser));
  }
}

export default new AuthController();
