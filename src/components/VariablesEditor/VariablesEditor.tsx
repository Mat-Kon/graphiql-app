import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setVariables } from '../../utils/redux/variablesSlice';
import { setHeaders } from '../../utils/redux/headersSlice';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');
import styles from './index.module.css';

interface Props {
  mode: string;
}

const VariablesEditor = ({ mode }: Props) => {
  const refEditor = useRef<AceEditor>(null);
  const dispatch = useDispatch();
  const handlerEditor = () => {
    if (refEditor.current) {
      const value = refEditor.current.editor.getValue();
      mode == 'variables' ? dispatch(setVariables(value)) : dispatch(setHeaders(value));
    }
  };
  return (
    <div className={styles.variables_editor} id={mode}>
      <AceEditor
        className={styles.editor}
        onChange={handlerEditor}
        ref={refEditor}
        name="editor"
        height="100%"
        width="100%"
        mode="graphqlschema"
        theme="xcode"
        value="Should be in JSON format"
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

export default VariablesEditor;
