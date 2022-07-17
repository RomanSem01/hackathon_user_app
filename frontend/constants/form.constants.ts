export const SignupInitialData = {
  username: '',
  email: '',
  password: '',
  check_password: '',
};

export const LoginInitialData = {
  username: '',
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
  { type: 'text', placeholder: ' ', name: 'username', label: 'Username' },
  { type: 'password', placeholder: ' ', name: 'password', label: 'Password' },
];
