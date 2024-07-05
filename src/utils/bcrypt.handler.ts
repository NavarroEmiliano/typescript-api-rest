import { hash, compare } from 'bcryptjs';

const encrypt = async (pass: string) => {
  const paswordHash = await hash(pass, 10);
  return paswordHash;
};
const verify = async (pass: string, passHashed:string) => {
  const isCorrect = await compare(pass, passHashed);
  return isCorrect;
};

export { encrypt, verify };
