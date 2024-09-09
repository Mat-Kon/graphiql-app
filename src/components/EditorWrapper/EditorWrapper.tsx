import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { setQuery } from '../../utils/redux/querySlice';
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');

const DEAFAULT_VALUE = `There should only be a query.
query {
  character(id: ID) {
    name
  }
}
`;

const EditorWrapper: React.FC = () => {
  const refEditor = useRef<AceEditor>(null);
  const dispatch = useAppDispatch();
  const [curValue, setCurValue] = useState(DEAFAULT_VALUE);
  const prettifiedQuery = useAppSelector((store) => store.prettified.prettifiedQuery);

  useEffect(() => {
    if (prettifiedQuery !== '') {
      setCurValue(prettifiedQuery);
    }
  }, [prettifiedQuery]);

  const handlerEditor = () => {
    if (refEditor.current) {
      const newQuery = refEditor.current.editor.getValue();
      setCurValue(newQuery);
      dispatch(setQuery(newQuery));
    }
  };

  return (
    <div className={styles.editor_wrapper} data-testid="editor">
      <AceEditor
        className={styles.editor}
        onChange={handlerEditor}
        value={curValue}
        ref={refEditor}
        name="editor"
        height="100%"
        width="100%"
        mode="graphqlschema"
        theme="xcode"
        fontSize={14}
        showGutter={true}
        highlightActiveLine={true}
        tabSize={2}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
      />
    </div>
  );
};

export default EditorWrapper;
