export const SignupInitialData = {
  username: '',
  email: '',
  password: '',
  check_password: '',
};

export const LoginInitialData = {
  email: '',
  password: '',
};

export const SignupInputs = [
  { type: 'text', placeholder: ' ', name: 'username', label: 'Username' },
  { type: 'email', placeholder: ' ', name: 'email', label: 'Email' },
  { type: 'password', placeholder: ' ', name: 'password', label: 'Password' },
  {
    type: 'password',
    placeholder: ' ',
    name: 'check_password',
    label: 'Re-enter Password',
  },
];

export const LoginInputs = [
  { type: 'email', placeholder: ' ', name: 'email', label: 'Email' },
  { type: 'password', placeholder: ' ', name: 'password', label: 'Password' },
];
