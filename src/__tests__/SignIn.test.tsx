import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import SignIn from '../components/SignIn/SignIn';
import { Provider } from 'react-redux';
import { store } from '../utils/redux/store';
import userEvent from '@testing-library/user-event';

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
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPas = screen.getByPlaceholderText('Password');
    const btn = screen.getByText('Submit');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPas).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('render error message to entar email', async () => {
    const user = userEvent.setup();
    const invalideEmail = 'test';
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const inputEmail = screen.getByPlaceholderText('Email');

    expect(inputEmail).toBeInTheDocument();

    await user.click(inputEmail);

    waitFor(() => {
      const errorMessageForEmail = screen.getByText(' Email is required');
      expect(errorMessageForEmail).toBeInTheDocument();
    });

    await user.keyboard(invalideEmail);

    waitFor(() => {
      const errorMessageForEmail = screen.getByText(' Use the correct email');
      expect(errorMessageForEmail).toBeInTheDocument();
    });
  });

  it('render error message to entar password', async () => {
    const user = userEvent.setup();
    const invalidPas = 'aaaa';
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const inputPas = screen.getByPlaceholderText('Password');

    expect(inputPas).toBeInTheDocument();

    await user.click(inputPas);

    waitFor(() => {
      const errorMessageForEmail = screen.getByText(' Password is required');
      expect(errorMessageForEmail).toBeInTheDocument();
    });

    await user.keyboard(invalidPas);

    waitFor(() => {
      const errorMessageForEmail = screen.getByText(
        ' The password must contain at least 1 digit, 1 letter, 1 special character, at least 8 characters'
      );
      expect(errorMessageForEmail).toBeInTheDocument();
    });
  });
});
