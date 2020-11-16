import { Router } from 'express';
import profileRoutes from './PhotoRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/photos', profileRoutes);

export default routes;
