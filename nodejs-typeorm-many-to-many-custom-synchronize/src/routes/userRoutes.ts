import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

const techRoutes = Router();

techRoutes.get('/', async (request, response) => {
  const repo = getRepository(User);

  const model = await repo.find();
  return response.json(model);
});

techRoutes.post('/', async (request, response) => {
  const { name, techs } = request.body;

  const repo = getRepository(User);

  const model = repo.create({
    name,
    usersToTechs: techs,
  });

  await repo.save(model);

  return response.json(model);
});

export default techRoutes;
