import * as yup from 'yup';

export const SignupValidation = () => {
  return yup.object({
    username: yup
      .string()
      .min(6, 'Username can nont be less then 6 characters')
      .required('Enter username'),
    first_name: yup.string(),
    last_name: yup.string(),
    job: yup.string(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, 'Password may be min 6 characters')
      .required('Enter password'),
    check_password: yup
      .string()
      .min(6, 'Password may be min 6 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Enter password'),
  });
};
