import React from 'react';
import styles from './index.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const RequstBtnsContainer: React.FC = () => {
  const { translations, currentLanguage } = useLanguageContext();

  return (
    <div className={styles.btns_container}>
      <button>{translations[currentLanguage].setBtn}</button>
      <button>{translations[currentLanguage].requestBtn}</button>
      <button>btn</button>
      <button>btn</button>
    </div>
  );
};

export default RequstBtnsContainer;
