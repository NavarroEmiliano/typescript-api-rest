import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET ?? 'asjkdhaksjdhajkflsDJ';

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '2h' });

  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  console.log(isOk);
  return isOk;
};

export { generateToken, verifyToken };
