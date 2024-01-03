import { useState } from 'react';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import VariablesEditor from '../VariablesEditor/VariablesEditor';
import styles from './index.module.css';

const VariablesBlock = () => {
  const { translations, currentLanguage } = useLanguageContext();
  const [isVarHidden, setIsVarHidden] = useState(false);
  return (
    <>
      <div className={styles.headers_variables} data-testid="var-container">
        <button
          className={
            isVarHidden
              ? styles.headers_variables__button
              : `${styles.headers_variables__button} ${styles.active}`
          }
          onClick={() => setIsVarHidden(false)}
        >
          {translations[currentLanguage].variables}
        </button>
        <button
          className={
            isVarHidden
              ? `${styles.headers_variables__button} ${styles.active}`
              : styles.headers_variables__button
          }
          onClick={() => setIsVarHidden(true)}
        >
          {translations[currentLanguage].headers}
        </button>
      </div>
      <div className={styles.headers_variables__editor}>
        {!isVarHidden && <VariablesEditor mode="variables" />}
        {isVarHidden && <VariablesEditor mode="headers" />}
      </div>
    </>
  );
};

export default VariablesBlock;
