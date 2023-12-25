import EditorWrapper from '../EditorWrapper/EditorWrapper';
import RequstBtnsContainer from '../RequstBtnsContainer/RequstBtnsContainer';
import { useState } from 'react';
import styles from './request.module.css';

const RequestBlock = () => {
  const [url, setUrl] = useState(localStorage.getItem('url') ?? '');

  return (
    <div className={styles.req__container}>
      <div className={styles.req__header}>
        <input
          type="text"
          id={styles.req__url}
          placeholder="URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          data-testid="url-textarea"
        ></input>
      </div>
      <RequstBtnsContainer url={url} />
      <EditorWrapper />
      <div className={styles.req__heders_variables} data-testid="var-container">
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
