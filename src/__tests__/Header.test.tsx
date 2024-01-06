import '@testing-library/jest-dom';
import { screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header';
import { renderer } from '../utils/renderer';
import * as authHooks from 'react-firebase-hooks/auth';

const mockUseAuthState = jest.fn();
jest.spyOn(authHooks, 'useAuthState').mockImplementation(mockUseAuthState);

describe('Header', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders login and sign up links when user is not logged in', () => {
    mockUseAuthState.mockReturnValueOnce([null]);
    renderer(<Header />);

    const loginLink = screen.getByRole('link', { name: /Log in/i });
    const signUpLink = screen.getByRole('link', { name: /Sign up/i });

    expect(loginLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it('renders logout and welcome links when user is login', () => {
    mockUseAuthState.mockReturnValueOnce([{ user: 'exampleUser' }]);
    renderer(<Header />);

    const logOutLink = screen.getByRole('link', { name: /Log out/i });
    const WelcomeLink = screen.getByRole('link', { name: /Welcome/i });

    expect(logOutLink).toBeInTheDocument();
    expect(WelcomeLink).toBeInTheDocument();
  });

  it('applies sticky style when scrolled', () => {
    mockUseAuthState.mockReturnValueOnce([null]);
    const originalScrollY = window.scrollY;
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    window.scrollY = 15;
    renderer(<Header />);

    expect(screen.getByTestId('sticky-header')).toBeInTheDocument();

    window.scrollY = originalScrollY;
  });

  it('show change language to click on button user is not logged in', () => {
    mockUseAuthState.mockReturnValue([null]);
    renderer(<Header />);

    const changeLangBtn = screen.getByText('en');
    expect(changeLangBtn).toBeInTheDocument();

    fireEvent.click(changeLangBtn);

    waitFor(() => {
      const changeLangBtn = screen.getByText('ru');
      const loginLink = screen.getByRole('link', { name: /Вход/i });
      const signUpLink = screen.getByRole('link', { name: /Регистрация/i });

      expect(loginLink).toBeInTheDocument();
      expect(signUpLink).toBeInTheDocument();
      expect(changeLangBtn).toBeInTheDocument();
    });
  });

  it('show change language to click on button user is login', () => {
    mockUseAuthState.mockReturnValue([{ user: 'exampleUser' }]);
    renderer(<Header />);

    const changeLangBtn = screen.getByText('en');
    expect(changeLangBtn).toBeInTheDocument();

    fireEvent.click(changeLangBtn);

    waitFor(() => {
      const changeLangBtn = screen.getByText('ru');
      const loginLink = screen.getByRole('link', { name: /Приветствую/i });
      const signUpLink = screen.getByRole('link', { name: /Выход/i });

      expect(loginLink).toBeInTheDocument();
      expect(signUpLink).toBeInTheDocument();
      expect(changeLangBtn).toBeInTheDocument();
    });
  });
});
