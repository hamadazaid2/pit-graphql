import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 8);
};
export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
