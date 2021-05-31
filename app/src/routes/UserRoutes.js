import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = new Router();

routes.post('/', UserController.create);

routes.delete('/:id', UserController.remove);

routes.put('/:id', UserController.update);

routes.get('/', UserController.findAll);
routes.get('/:id', UserController.findOne);

export default routes;
