import { Router } from 'express';
import {
  loginController,
  registerController,
} from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerController)
      .post('/login', loginController);

export { router };
