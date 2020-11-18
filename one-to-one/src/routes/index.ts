import { Router } from 'express';
import profileRoutes from './profileRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/profiles', profileRoutes);
routes.use('/users', userRoutes);

export default routes;
