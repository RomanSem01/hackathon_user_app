import { IUserData } from '../types/home.types';

export const getClearData = (data: IUserData) => {
  const { username, email, is_active, is_staff } = data;
  return { username, email, is_active, is_staff };
};
