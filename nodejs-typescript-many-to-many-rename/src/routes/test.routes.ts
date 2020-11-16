import { Router } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';
import Question from '../models/Question';

const testRoutes = Router();

/**
 * CATEGORIAS
 */
testRoutes.get('/categories', async (request, response) => {
  const repository = getRepository(Category);

  const categories = await repository.find({ relations: ['questions'] });

  return response.json(categories);
});

testRoutes.post('/categories', async (request, response) => {
  const { name } = request.body;

  const repository = getRepository(Category);
  const category = repository.create({
    name,
  });

  await repository.save(category);

  return response.json(category);
});

/**
 * QUESTOES
 */
testRoutes.get('/questions', async (request, response) => {
  const repository = getRepository(Question);
  const question = await repository.find({ relations: ['categories'] });
  return response.json(question);
});

testRoutes.post('/questions', async (request, response) => {
  const { title, categories } = request.body;

  const repository = getRepository(Question);

  const question = repository.create({
    title,
    categories,
  });

  await repository.save(question);

  return response.json(question);
});

export default testRoutes;
