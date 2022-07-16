export interface IInputProps {
  type: string;
  placeholder?: string;
  label?: string;
  name?: string;
}

export interface ISignupData {
  username: string;
  email: string;
  password: string;
  check_password: string;
}

export interface ILoginData {
  email: string;
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
