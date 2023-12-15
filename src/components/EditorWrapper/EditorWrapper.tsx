import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useGetIntrospectionQuery } from '../../utils/api/api';
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');

const DEAFAULT_VALUE = 'Hello!\n{\n  query{\n    name\n  }\n}';

const EditorWrapper: React.FC = () => {
  const { data, isLoading } = useGetIntrospectionQuery(undefined);
  const refEditor = useRef<AceEditor>(null);

  useEffect(() => {
    console.log(data);
  }, [isLoading]);

  const handlerEditor = () => {
    if (refEditor.current) {
      const code = refEditor.current.editor.getValue();
      console.log(code);
    }
  };

  return (
    <div className={styles.editor_wrapper}>
      <AceEditor
        className={styles.editor}
        onChange={handlerEditor}
        ref={refEditor}
        name="editor"
        height="100%"
        width="100%"
        mode="graphqlschema"
        theme="xcode"
        defaultValue={DEAFAULT_VALUE}
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
