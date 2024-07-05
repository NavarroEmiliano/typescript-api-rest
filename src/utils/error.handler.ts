import { Response } from 'express';

const handlerHttp = (res: Response, error: Error) => {
  const errorMessage = `Something went wrong. Error: ${error.message}`;
  res.status(500).send({ error: errorMessage });
};

export { handlerHttp };