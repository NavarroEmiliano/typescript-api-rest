import { Router } from 'express';
import {
  deleteCarController,
  getCarController,
  getCarsController,
  postCarController,
  updateCarController,
} from '../controllers/car.controller';

const router = Router();

router
  .get('/', getCarsController)
  .get('/:id', getCarController)
  .post('/', postCarController)
  .put('/:id', updateCarController)
  .delete('/:id', deleteCarController);

export { router };
