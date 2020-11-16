import { Router } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';
import Question from '../models/Question';

const appRoutes = Router();

/**
 * CATEGORIES
 */
appRoutes.get('/categories', async (request, response) => {
  const repo = getRepository(Category);
  const categories = await repo.find({ relations: ['questions'] });
  return response.json(categories);
});

appRoutes.post('/categories', async (request, response) => {
  const { name } = request.body;

  const repo = getRepository(Category);
  const category = repo.create({
    name,
  });
  await repo.save(category);

  return response.json(category);
});

/**
 * QUESTIONS
 */
appRoutes.get('/questions', async (request, response) => {
  const repo = getRepository(Question);
  const questions = await repo.find({ relations: ['categories'] });
  return response.json(questions);
});

appRoutes.post('/questions', async (request, response) => {
  const { title, categories } = request.body;

  const repo = getRepository(Question);

  const question = repo.create({
    title,
    categories,
  });

  await repo.save(question);

  return response.json(question);
});

export default appRoutes;
