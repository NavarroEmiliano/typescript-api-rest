import { Response } from 'express';
import { handlerHttp } from '../utils/error.handler';
import { RequestExt } from '../middleware/session';

const getOrdersController = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'This information is only seen by people who are logged in / jwt',
      user: req.user,
    });
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

export { getOrdersController };
