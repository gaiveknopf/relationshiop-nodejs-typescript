import { Router } from 'express';
import appRoutes from './appRoutes';

const routes = Router();

/* DONT NEED USE TRYCATCH */
routes.use('/', appRoutes);

export default routes;
