import { ReactNode, createContext, useState } from 'react';
import translationsData from './translations.json';

interface Translations {
  [key: string]: Record<string, string>;
}

interface LanguageContextType {
  translations: Translations;
  currentLanguage: string;
  changeLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  translations: {},
  currentLanguage: '',
  changeLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [translations] = useState<Translations>(translationsData);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = () => {
    if (currentLanguage === 'en') {
      setCurrentLanguage('ru');
    }
    if (currentLanguage === 'ru') setCurrentLanguage('en');
  };

  return (
    <LanguageContext.Provider value={{ translations, currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
