import { useState } from 'react';
import styles from './docs.module.css';
import DocsMain from './DocsMain';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const Docs = () => {
  const [isOpen, setOpen] = useState(false);
  const { translations, currentLanguage } = useLanguageContext();

  return isOpen ? (
    <div className={styles.docs_container_open} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          {translations[currentLanguage].closeDocsBtn}
        </button>
      </div>
      <DocsMain />
    </div>
  ) : (
    <div className={styles.docs_container_close} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn_open} onClick={() => setOpen(!isOpen)}>
          {translations[currentLanguage].docsBtn}
        </button>
      </div>
    </div>
  );
};

export default Docs;
