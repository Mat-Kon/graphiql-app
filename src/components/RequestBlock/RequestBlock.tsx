import EditorWrapper from '../EditorWrapper/EditorWrapper';
import RequstBtnsContainer from '../RequstBtnsContainer/RequstBtnsContainer';
import VariablesBlock from '../VariablesBlock/VariablesBlock';
import { useState } from 'react';
import styles from './request.module.css';

const RequestBlock = () => {
  const [url, setUrl] = useState('');
  return (
    <div className={styles.req__container}>
      <div className={styles.req__header}>
        <textarea
          id={styles.req__url}
          rows={1}
          placeholder="URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></textarea>
      </div>
      <RequstBtnsContainer url={url} />
      <EditorWrapper />
      <VariablesBlock />
    </div>
  );
};

export default RequestBlock;
