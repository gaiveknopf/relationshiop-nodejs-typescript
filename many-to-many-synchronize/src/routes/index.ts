import { Router } from 'express';
import appRoutes from './appRoutes';

const routes = Router();

routes.use('/', appRoutes);

export default routes;
