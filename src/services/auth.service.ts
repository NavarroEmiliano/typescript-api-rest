import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interace';
import UserModel from '../models/user.model';
import { encrypt, verify } from '../utils/bcrypt.handler';
import { generateToken } from '../utils/jwt.handler';

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return 'User already exists';

  const passHashed = await encrypt(password);

  const newUser = await UserModel.create({ email, password: passHashed, name });
  return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return 'Invalid email or password';
  const paswordHash = checkIs.password;
  const isCorrect = await verify(password, paswordHash);
  if (!isCorrect) return 'Invalid email or password';

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return {data};
};

export { registerNewUser, loginUser };
