import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../utils/hooks/useLangContext', () => ({
  useLanguageContext: () => ({
    translations: {
      en: {
        login: 'Login',
        signup: 'Signup',
      },
    },
    currentLanguage: 'en',
    changeLanguage: jest.fn(),
  }),
}));

describe('Header', () => {
  it('renders login and signup links when user is not logged in', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
  });

  it('applies sticky style when scrolled', () => {
    const originalScrollY = window.scrollY;
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    window.scrollY = 10;

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('sticky-header')).toBeInTheDocument();

    window.scrollY = originalScrollY;
  });
});