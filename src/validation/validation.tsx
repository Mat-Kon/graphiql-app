import { object, string } from 'yup';

const PASS_REG: RegExp = /^(?=.*[a-z][A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
const EMAIL_REG: RegExp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;

export const schema = object({
  email: string()
    .email('Use the correct email')
    .required('Email is required')
    .matches(EMAIL_REG, 'The email should be like xxx@xxxx.xxx'),
  password: string()
    .required('Password is required')
    .matches(
      PASS_REG,
      'The password must contain at least 1 digit, 1 letter, 1 special character, at least 8 characters'
    ),
  passwordRepeat: string()
    .required('Please confirm your password')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export const schemaSignIn = object({
  email: string().email('Use the correct email').required('Email is required'),
  password: string()
    .required('Password is required')
    .matches(
      PASS_REG,
      'The password must contain at least 1 digit, 1 letter, 1 special character, at least 8 characters'
    ),
});
