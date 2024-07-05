import { Request, Response } from 'express';
import { handlerHttp } from '../utils/error.handler';


const getOrdersController = async (req: Request, res: Response) => {
  try {
    res.send('This information is only seen by people who are logged in / jwt');
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

export {
  getOrdersController,
};
