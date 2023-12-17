import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SignIn from '../components/SignIn/SignIn';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../utils/hooks/useLangContext', () => ({
  useLanguageContext: () => ({
    translations: {
      en: {
        login: 'Log in',
        email: 'Email',
        password: 'Password',
        submit: 'Submit',
      },
    },
    currentLanguage: 'en',
  }),
}));

describe('SignIn component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
