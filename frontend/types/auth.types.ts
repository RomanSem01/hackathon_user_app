import { FormikErrors } from 'formik';

export interface ISignupData {
  username: string;
  first_name: string;
  last_name: string;
  job: string;
  email: string;
  password: string;
  check_password: string;
}

export interface IInputProps {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
  error: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IAuthRes {
  username: string;
}

export interface ISignupResponse {
  username: string;
  email: string;
  is_active: boolean;
}
export interface ILoginResponse {
  access: string;
  refresh: string;
  username: string;
}

export interface IActivationResponse {
  message: string;
}

export interface IActivationData {
  data: IActivationResponse | undefined;
}
