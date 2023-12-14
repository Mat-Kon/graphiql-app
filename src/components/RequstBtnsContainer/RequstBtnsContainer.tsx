import React from 'react';
import styles from './index.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import BtnRequest from '../BtnRequest/BtnRequest';

const RequstBtnsContainer: React.FC = () => {
  const { translations, currentLanguage } = useLanguageContext();

  return (
    <div className={styles.btns_container}>
      <button className={styles.request_btns}>{translations[currentLanguage].setBtn}</button>
      <BtnRequest name={translations[currentLanguage].requestBtn} className={styles.request_btns} />
      <button className={styles.request_btns}>btn</button>
      <button className={styles.request_btns}>btn</button>
    </div>
  );
};

export default RequstBtnsContainer;
