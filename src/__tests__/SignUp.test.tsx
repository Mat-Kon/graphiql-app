import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SignUp from '../components/SignUp/SignUp';
import { Provider } from 'react-redux';
import { store } from '../utils/redux/store';

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
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Repeat Password')).toBeInTheDocument();
  });
});
