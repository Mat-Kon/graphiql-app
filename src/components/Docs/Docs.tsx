import { useState } from 'react';
import styles from './docs.module.css';
import DocsMain from './DocsMain';

const Docs = () => {
  const [isOpen, setOpen] = useState(false);

  return isOpen ? (
    <div className={styles.docs_container_open} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          Close docs
        </button>
      </div>
      <DocsMain />
    </div>
  ) : (
    <div className={styles.docs_container_close} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn_open} onClick={() => setOpen(!isOpen)}>
          Docs
        </button>
      </div>
    </div>
  );
};

export default Docs;
