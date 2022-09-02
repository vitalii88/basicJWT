import CustomAPIError from '../errors/CustomError.js';

const login = async (req, resp) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    throw new CustomAPIError('Please, provide email and password', 400);
  }
  resp.send('Fake Login/Register/Signup Route ');
};

const dashboard = async (req, resp) => {
  const luckyNumber = Math.floor(Math.random()*100) // 0 to 100
  resp.status(200).json({ msg: 'Hello user!', secret: `Here you secret lucky number is ${luckyNumber}` })
}

export { login, dashboard };
