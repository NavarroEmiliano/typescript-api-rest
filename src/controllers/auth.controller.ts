import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.service';

const registerController = async (req: Request, res: Response) => {
  const { body } = req;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === 'Invalid email or password') {
    return res.status(403).send(responseUser);
  }
  res.send(responseUser);
};

export { registerController, loginController };
