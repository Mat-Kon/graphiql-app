import { useState } from 'react';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import VariablesEditor from '../VariablesEditor/VariablesEditor';
import styles from './index.module.css';

const VariablesBlock = () => {
  const { translations, currentLanguage } = useLanguageContext();
  const [isVarHidden, setIsVarHidden] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handlerVarBtn = () => {
    if (isOpen && !isVarHidden) {
      setOpen(false);
    } else {
      setOpen(true);
      setIsVarHidden(false);
    }
  };

  const handlerHeadersBtn = () => {
    if (isOpen && isVarHidden) {
      setOpen(false);
    } else {
      setOpen(true);
      setIsVarHidden(true);
    }
  };

  return (
    <>
      <div className={styles.headers_variables} data-testid="var-container">
        <button
          className={
            isVarHidden
              ? styles.headers_variables__button
              : `${styles.headers_variables__button} ${styles.active}`
          }
          onClick={handlerVarBtn}
        >
          {translations[currentLanguage].variables}
        </button>
        <button
          className={
            isVarHidden
              ? `${styles.headers_variables__button} ${styles.active}`
              : styles.headers_variables__button
          }
          onClick={handlerHeadersBtn}
        >
          {translations[currentLanguage].headers}
        </button>
      </div>
      {isOpen ? (
        <div className={styles.headers_variables__editor}>
          {!isVarHidden && <VariablesEditor mode="variables" />}
          {isVarHidden && <VariablesEditor mode="headers" />}
        </div>
      ) : null}
    </>
  );
};

export default VariablesBlock;
