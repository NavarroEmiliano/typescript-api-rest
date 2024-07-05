import { Schema, model } from 'mongoose';
import { Storage } from '../interfaces/storage.interface';

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('storage', StorageSchema);
