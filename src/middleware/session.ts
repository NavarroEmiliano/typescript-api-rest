import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.handler';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization ?? '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      return res.status(401).send('Jwt no valid');
    }
    req.user = isUser;
    next();
  } catch (error) {
    res.status(400).send('Not valid session');
  }
};

export { checkJwt };
