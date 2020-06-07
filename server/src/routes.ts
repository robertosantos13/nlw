import express from 'express';

import PoinstsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const poinstController = new PoinstsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', poinstController.create);
routes.get('/points', poinstController.index);
routes.get('/points/:id', poinstController.show);


export default routes;