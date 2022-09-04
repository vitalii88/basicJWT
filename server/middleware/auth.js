import CustomAPIError from '../errors/CustomError.js';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, resp, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username  } = decoded;

    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError('Not authorizet to this route', 401);
  }
}

export default authMiddleware;
