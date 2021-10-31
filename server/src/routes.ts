import express from 'express';

import DogsController from './controllers/DogsController';

const routes = express.Router(); 

const dogsController = new DogsController();

routes.get('/dogs', dogsController.index);
routes.post('/dogs', dogsController.create);
routes.get('/clean', dogsController.clean);

export default routes;
