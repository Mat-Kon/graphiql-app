import { useState } from 'react';
import styles from './docs.module.css';

const ENDPOINT = 'https://rickandmortyapi.com/'; // for first time

export const QueryData = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  console.log(data.__schema.types);
  return data.data;
};

const Docs = () => {
  QueryData();
  const [isOpen, setOpen] = useState(false);

  return isOpen ? (
    <div className={styles.docs_container_open}>
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          btn
        </button>
      </div>
      <div className={styles.docs}>Here will be Docs</div>
    </div>
  ) : (
    <div className={styles.docs_container_close}>
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          btn
        </button>
      </div>
    </div>
  );
};

export default Docs;
