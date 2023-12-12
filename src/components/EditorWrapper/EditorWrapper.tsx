import React from 'react';
import styles from './index.module.css';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';

const DEAFAULT_VALUE = 'Hello!\n{\n  query{\n    name\n  }\n}';

const EditorWrapper: React.FC = () => {
  return (
    <div className={styles.editor_wrapper}>
      <AceEditor
        className={styles.editor}
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
