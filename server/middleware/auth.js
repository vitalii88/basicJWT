import { AuthError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req, resp, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AuthError('No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username  } = decoded;

    req.user = { id, username };
    next();
  } catch (error) {
    throw new AuthError('Not authorizet to this route');
  }
}

export default authMiddleware;
