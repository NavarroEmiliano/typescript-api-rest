import { Request, Response } from 'express';
import { handlerHttp } from '../utils/error.handler';
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from '../services/car.service';

const getCarController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseCar = await getCar(id);
    res.send(responseCar);
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

const getCarsController = async (req: Request, res: Response) => {
  try {
    const responseCar = await getCars();
    res.send(responseCar);
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

const updateCarController = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const responseCar = await updateCar(id, body);
    res.send(responseCar);
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

const postCarController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseCar = await insertCar(body);
    res.send(responseCar);
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

const deleteCarController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseCar = await deleteCar(id);
    const data = responseCar ?? 'NOT_FOUND';
    res.send(data);
  } catch (error) {
    handlerHttp(res, error as Error);
  }
};

export {
  getCarController,
  getCarsController,
  updateCarController,
  postCarController,
  deleteCarController,
};
