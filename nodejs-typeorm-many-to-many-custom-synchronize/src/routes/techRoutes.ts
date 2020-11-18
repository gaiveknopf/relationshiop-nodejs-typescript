import { Router } from 'express';
import { getRepository } from 'typeorm';
import Tech from '../models/Tech';

const techRoutes = Router();

techRoutes.get('/', async (request, response) => {
  const repo = getRepository(Tech);

  const model = await repo.find();
  return response.json(model);
});

techRoutes.post('/', async (request, response) => {
  const { name } = request.body;

  const repo = getRepository(Tech);

  const model = repo.create({
    name,
  });

  await repo.save(model);

  return response.json(model);
});

export default techRoutes;
