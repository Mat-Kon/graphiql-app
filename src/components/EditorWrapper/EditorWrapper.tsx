import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { nord } from '@uiw/codemirror-theme-nord';
// import { historyField } from '@codemirror/commands';

// const stateFields = { history: historyField };
const extensions = [javascript()];

const EditorWrapper: React.FC = () => {
  // const serializedState = localStorage.getItem('myEditorState') || '';
  const [value, setValue] = useState('');
  const editor = useRef(null);

  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    height: '100%',
    minWidth: '100%',
    theme: nord,
    value: value,
    onChange: setValue,
    style: {
      borderRadius: '20px',
    },
    // initialState: {
    //   json: JSON.parse(serializedState),
    //   fields: stateFields
    // }
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return (
    <div className={styles.editor_wrapper}>
      <div id={styles.editor} ref={editor} />
    </div>
  );
};

export default EditorWrapper;
