import CustomAPIError from '../errors/CustomError.js';
import jwt from 'jsonwebtoken';

const login = async (req, resp) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError('Please, provide email and password', 400);
  }

  // Just for Demo
  const id = new Date().getDate();

  const token = jwt.sign(
    { id, username },
    process.env.JWT_SECRET,
    { expiresIn: '30d' },
  );

  resp.status(200).json({ msg: 'User created', token });
};

const dashboard = async (req, resp) => {

  const luckyNumber = Math.floor(Math.random()*100) // 0 to 100

  resp.status(200).json({
    msg: `Hello ${req.user.username}!`,
    secret: `Here you secret lucky number is ${luckyNumber}`,
  })
}

export { login, dashboard };
