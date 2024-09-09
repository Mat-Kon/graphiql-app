import EditorWrapper from '../EditorWrapper/EditorWrapper';
import RequstBtnsContainer from '../RequstBtnsContainer/RequstBtnsContainer';
import VariablesBlock from '../VariablesBlock/VariablesBlock';
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
      <VariablesBlock />
    </div>
  );
};

export default RequestBlock;
