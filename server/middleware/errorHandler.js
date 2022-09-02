import CustomAPIError from '../errors/CustomError.js';

const errorHandlerMiddleware = (err, req, resp, next) => {
  if (err instanceof CustomAPIError) {
    return resp.status(err.statusCode).json({ msg: err.message });
  }
  return resp.status(500).send('Something went wrong try again later');
};

export default errorHandlerMiddleware;
