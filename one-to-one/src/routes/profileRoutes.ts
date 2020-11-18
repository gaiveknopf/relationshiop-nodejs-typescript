import { Router } from 'express';
import { getRepository } from 'typeorm';
import Profile from '../models/Profile';
import User from '../models/User';

const profileRoutes = Router();

profileRoutes.get('/', async (request, response) => {
  const profileRepository = getRepository(Profile);
  const profiles = await profileRepository.find({ relations: ['user'] });
  return response.json(profiles);

  //
});

profileRoutes.post('/', async (request, response) => {
  const { gender, photo } = request.body;
  const profileRepository = getRepository(Profile);
  const profile = profileRepository.create({
    gender,
    photo,
  });

  await profileRepository.save(profile);

  return response.json(profile);
});

profileRoutes.post('/:id/users', async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const userRepository = getRepository(User);
  const user = userRepository.create({
    id,
    name,
  });

  await userRepository.save(user);

  return response.json(user);
});

export default profileRoutes;
