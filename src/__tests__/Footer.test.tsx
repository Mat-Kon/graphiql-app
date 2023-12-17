import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

jest.mock('../utils/hooks/useLangContext', () => ({
  useLanguageContext: () => ({
    translations: {
      en: {
        konstantin: 'Konstantin',
        eugenia: 'Eugenia',
        olya: 'Olya',
      },
    },
    currentLanguage: 'en',
  }),
}));

describe('Footer', () => {
  it('renders correctly links', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Konstantin')).toBeInTheDocument();
    expect(getByText('Eugenia')).toBeInTheDocument();
    expect(getByText('Olya')).toBeInTheDocument();
  });

  it('renders icons', () => {
    const { getAllByAltText, getByAltText } = render(<Footer />);

    expect(getAllByAltText('github logo')).toHaveLength(3);
    expect(getByAltText('school icon')).toBeInTheDocument();
  });
});
