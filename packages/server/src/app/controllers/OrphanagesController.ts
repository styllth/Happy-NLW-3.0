/* eslint-disable react/forbid-prop-types */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; // Busca as informações do banco
import * as Yup from 'yup';

import Image from '../models/Image';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

class OrphanagesController {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(orphanageView.renderMany(orphanages));
  }

  async show(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const { id } = request.params;
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });
    return response.json(orphanageView.render(orphanage));
  }

  async create(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const {
      name,
      latitude,
      longitude,
      about,
      whatsapp,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    // Buscando as imagens e salvando o relacionamento
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => ({ path: image.filename }));
    const data = {
      name,
      latitude,
      longitude,
      about,
      whatsapp,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      whatsapp: Yup.string().required(),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });
    await schema.validate(data, {
      abortEarly: false,
    });
    const orphanage = orphanagesRepository.create(data);
    await orphanagesRepository.save(orphanage);
    return response.status(201).json(orphanage);
  }

  async update(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const {
      name,
      latitude,
      longitude,
      about,
      whatsapp,
      instructions,
      opening_hours,
      open_on_weekends,
      approved,
    } = request.body;
    const { id } = request.params;
    const orphanage = await orphanagesRepository.findOneOrFail();
    // Buscando as imagens e salvando o relacionamento
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => ({ path: image.filename }));
    const updateData = {
      name,
      latitude,
      longitude,
      about,
      whatsapp,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
      approved,
    };
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      whatsapp: Yup.string().required(),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });
    await schema.validate(updateData, {
      abortEarly: false,
    });
    await orphanagesRepository.update(id, updateData);
    return response.status(201).json(updateData);
  }

  async delete(
    request: Request,
    response: Response
  ): Promise<Response<unknown>> {
    const orphanagesRepository = getRepository(Orphanage);
    const { orphanage_id } = request.params;
    const imagesRepository = getRepository(Image);
    const orphanage = await orphanagesRepository.findOneOrFail(orphanage_id, {
      relations: ['images'],
    });
    const { images } = orphanage;
    await imagesRepository.remove(images);
    await orphanagesRepository.remove(orphanage);
    return response.status(200).json({ orphanage, status: 'deleted' });
  }
}

export default new OrphanagesController();
