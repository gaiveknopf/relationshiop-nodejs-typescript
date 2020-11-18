import { Router } from 'express';
import techRoutes from './techRoutes';
import userToutes from './userRoutes';

const routes = Router();

routes.use('/techs', techRoutes);
routes.use('/users', userToutes);

export default routes;
