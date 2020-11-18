import { Router } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

const userRoutes = Router();

userRoutes.get('/', async (request, response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find({ relations: ['profile'] });
  return response.json(users);
});

export default userRoutes;
