import { useContext } from 'react';
import { LanguageContext } from '../switch-lang/langContext';

export const useLanguageContext = () => useContext(LanguageContext);
