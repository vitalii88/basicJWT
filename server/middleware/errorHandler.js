import CustomAPIError from '../errors/CustomError.js';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, resp, next) => {
  if (err instanceof CustomAPIError) {
    return resp.status(err.statusCode).json({ msg: err.message });
  }
  return resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later');
};

export default errorHandlerMiddleware;
