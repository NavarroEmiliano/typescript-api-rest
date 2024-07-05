import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.handler';

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization ?? '';
    const jwt = jwtByUser.split(' ').pop();
    const isValid = verifyToken(`${jwt}`);
    if (!isValid) {
      return res.status(401).send('Jwt no valid');
    }
    next();
  } catch (error) {
    res.status(400).send('Not valid session');
  }
};

export { checkJwt };
