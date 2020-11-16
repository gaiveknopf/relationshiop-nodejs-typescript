import { Router } from 'express';
import testRoutes from './test.routes';

const routes = Router();

/* DONT NEED USE TRYCATCH */
routes.use('/', testRoutes);

export default routes;
