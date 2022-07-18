import * as yup from 'yup';

export const LoginValidation = () => {
  return yup.object({
    username: yup
      .string()
      .min(6, 'Username can nont be less then 6 characters')
      .required('Enter username'),
    password: yup
      .string()
      .min(6, 'Password may be min 6 characters')
      .required('Enter password'),
  });
};
