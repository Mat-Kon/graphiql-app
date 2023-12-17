import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SignUp from '../components/SignUp/SignUp';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../utils/hooks/useLangContext', () => ({
  useLanguageContext: () => ({
    translations: {
      en: {
        signup: 'Sign Up',
        email: 'Email',
        password: 'Password',
        rePassword: 'Repeat Password',
        submit: 'Submit',
      },
    },
    currentLanguage: 'en',
  }),
}));

describe('SignUp component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SignUp />);

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat Password')).toBeInTheDocument();
  });
});
