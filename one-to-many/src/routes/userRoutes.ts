import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

const userRoutes = Router();

userRoutes.post('/', async (request, response) => {
  const { name } = request.body;

  const userRepository = getRepository(User);
  const user = userRepository.create({
    name,
  });

  await userRepository.save(user);

  return response.json(user);
});

userRoutes.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find({ relations: ['photos'] });
  return response.json(users);
});

export default userRoutes;
