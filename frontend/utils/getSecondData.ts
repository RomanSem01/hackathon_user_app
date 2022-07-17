import { IUserData } from '../types/home.types';

export const getSecondData = (data: IUserData) => {
  const { first_name, last_name, job } = data;
  return { first_name, last_name, job };
};
