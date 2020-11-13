/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';

import User from '../models/User';
import userViwer from '../views/users_view';

class UserController {
  async index(
    request: Request,
    response: Response
  ): Promise<Response<unknown>> {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return response.json(userViwer.renderMany(users));
  }

  async show(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { id } = request.params;
    const user = await userRepository.findOneOrFail(id);

    return response.json({ user: userViwer.render(user) });
  }

  async create(request: Request, response: Response) {
    return response.send('create');
  }

  async update(request: Request, response: Response) {
    return response.send('update');
  }

  async delete(request: Request, response: Response) {
    return response.send('delete');
  }
}

export default new UserController();
