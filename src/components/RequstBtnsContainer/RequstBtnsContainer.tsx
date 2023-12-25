import React from 'react';
import styles from './index.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import FormatBtn from '../FormatBtn/FormatBtn';
import BtnRequest from '../BtnRequest/BtnRequest';

interface Props {
  url: string;
}

const RequstBtnsContainer: React.FC<Props> = ({ url }: Props) => {
  const { translations, currentLanguage } = useLanguageContext();

  return (
    <div className={styles.btns_container} data-testid="req-btns-container">
      <button className={styles.request_btns} onClick={() => localStorage.setItem('url', url)}>
        {translations[currentLanguage].setBtn}
      </button>
      <BtnRequest name={translations[currentLanguage].requestBtn} className={styles.request_btns} />
      <FormatBtn
        className={styles.request_btns}
        content={translations[currentLanguage].formatBtn}
      />
    </div>
  );
};

export default RequstBtnsContainer;
