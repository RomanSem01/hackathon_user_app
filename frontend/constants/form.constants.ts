export const SignupInitialData = {
  username: '',
  first_name: '',
  last_name: '',
  job: '',
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
  {
    type: 'text',
    placeholder: ' ',
    name: 'first_name',
    label: 'First Name (Optional)',
  },
  {
    type: 'text',
    placeholder: ' ',
    name: 'last_name',
    label: 'Last Name (Optional)',
  },
  { type: 'text', placeholder: ' ', name: 'job', label: 'Job (Optional)' },
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
