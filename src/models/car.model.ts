import { Schema, model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const CarSchema = new Schema<Car>(
  {
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'electric'],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('cars', CarSchema);
