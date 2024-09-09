import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import { renderer } from '../utils/renderer';
import { useLanguageContext } from '../utils/hooks/useLangContext';

jest.mock('../utils/hooks/useLangContext', () => ({
  useLanguageContext: jest.fn(() => ({
    translations: {
      en: {
        konstantin: 'Konstantin',
        eugenia: 'Eugenia',
        olya: 'Olya',
      },
      ru: {
        konstantin: 'Константин',
        eugenia: 'Евгения',
        olya: 'Ольга',
      },
    },
    currentLanguage: 'en',
    changeLanguage: jest.fn(),
  })),
}));

describe('Footer', () => {
  it('renders correctly links on english', () => {
    renderer(<Footer />);

    expect(screen.getByText('Konstantin')).toBeInTheDocument();
    expect(screen.getByText('Eugenia')).toBeInTheDocument();
    expect(screen.getByText('Olya')).toBeInTheDocument();
  });

  it('renders correctly links on russia', () => {
    (useLanguageContext as jest.Mock).mockReturnValueOnce({
      translations: {
        ru: {
          konstantin: 'Константин',
          eugenia: 'Евгения',
          olya: 'Ольга',
        },
      },
      currentLanguage: 'ru',
      changeLanguage: jest.fn(),
    });

    renderer(<Footer />);

    expect(screen.getByText('Константин')).toBeInTheDocument();
    expect(screen.getByText('Евгения')).toBeInTheDocument();
    expect(screen.getByText('Ольга')).toBeInTheDocument();
  });

  it('renders icons', () => {
    const { getAllByAltText, getByAltText } = render(<Footer />);

    expect(getAllByAltText('github logo')).toHaveLength(3);
    expect(getByAltText('school icon')).toBeInTheDocument();
  });
});
