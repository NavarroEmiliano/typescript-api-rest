import { Router } from 'express';
import { getOrdersController } from '../controllers/order.controller';
import { checkJwt } from '../middleware/session';

const router = Router();

router.get('/',checkJwt, getOrdersController);

export { router };
