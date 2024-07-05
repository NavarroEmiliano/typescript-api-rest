import { Car } from '../interfaces/car.interface';
import CarModel from '../models/car.model';

const insertCar = async (car: Car) => {
  const responseInsert = await CarModel.create(car);
  return responseInsert;
};

const getCars = async () => {
  const responseGet = await CarModel.find();
  return responseGet;
};

const getCar = async (id: string) => {
  const responseGet = await CarModel.findById(id);
  return responseGet;
};

const updateCar = async (id: string, car: Car) => {
  const responsePut = await CarModel.findByIdAndUpdate(id, car, { new: true });
  return responsePut;
};

const deleteCar = async (id: string) => {
  const responseDelete = await CarModel.findByIdAndDelete(id);
  if(responseDelete){
    return 'Car deleted';
  }
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
