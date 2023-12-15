import React from 'react';
import styles from './index.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import PrettyBtn from '../PrettyBtn/PrettyBtn';

interface Props {
  url: string;
}

const RequstBtnsContainer: React.FC<Props> = ({ url }: Props) => {
  const { translations, currentLanguage } = useLanguageContext();

  return (
    <div className={styles.btns_container}>
      <button onClick={() => localStorage.setItem('url', url)}>
        {translations[currentLanguage].setBtn}
      </button>
      <button>{translations[currentLanguage].requestBtn}</button>
      <PrettyBtn />
    </div>
  );
};

export default RequstBtnsContainer;
