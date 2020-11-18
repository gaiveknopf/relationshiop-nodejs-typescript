import { json, Router } from 'express';
import { getRepository } from 'typeorm';
import Photo from '../models/Photo';
import userRoutes from './userRoutes';

const photoRoutes = Router();

photoRoutes.get('/', async (request, response) => {
  const photoRespository = getRepository(Photo);
  const photos = await photoRespository.find({ relations: ['user'] });

  return response.json(photos);
});

photoRoutes.post('/', async (request, response) => {
  const { url } = request.body;

  const photoRespository = getRepository(Photo);

  const photo = photoRespository.create({
    url,
  });

  await photoRespository.save(photo);

  return response.json(photo);
});

userRoutes.post('/:id/photos', async (request, response) => {
  const { id } = request.params;
  const { url } = request.body;

  const photoRespository = getRepository(Photo);
  const photo = photoRespository.create({
    url,
    user_id: id,
  });

  await photoRespository.save(photo);

  response.json(photo);
});

export default photoRoutes;
