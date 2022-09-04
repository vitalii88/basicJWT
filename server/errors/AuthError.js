import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomError.js';

class AuthError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  };
}

export default AuthError;
