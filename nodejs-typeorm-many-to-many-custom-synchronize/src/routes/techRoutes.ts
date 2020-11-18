import { Router } from 'express';
import { getRepository } from 'typeorm';
import Tech from '../models/Tech';

const techRoutes = Router();

techRoutes.get('/', async (request, response) => {
  const repo = getRepository(Tech);

  const model = await repo.find({
    relations: ['usersToTechs', 'usersToTechs.user'],
  });
  return response.json(model);
});

techRoutes.post('/', async (request, response) => {
  const { name, users } = request.body;

  const repo = getRepository(Tech);

  const model = repo.create({
    name,
    usersToTechs: users,
  });

  await repo.save(model);

  return response.json(model);
});

export default techRoutes;
