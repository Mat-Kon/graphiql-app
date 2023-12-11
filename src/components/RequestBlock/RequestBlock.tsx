import RequstBtnsContainer from '../RequstBtnsContainer/RequstBtnsContainer';
import styles from './request.module.css';

const RequestBlock = () => {
  return (
    <div className={styles.req__container}>
      <div className={styles.req__header}>
        <textarea id={styles.req__url} rows={1} placeholder="URL"></textarea>
      </div>
      <RequstBtnsContainer />
      <div className={styles.req__editor}></div>
      <div className={styles.req__heders_variables}>
        <div>
          <button>btn</button>
          <button>btn</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RequestBlock;
