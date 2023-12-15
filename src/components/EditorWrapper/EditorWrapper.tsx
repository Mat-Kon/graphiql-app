import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');

const DEAFAULT_VALUE = 'Hello!\n{\n  query{\n    name\n  }\n}';

const EditorWrapper: React.FC = () => {
  const refEditor = useRef<AceEditor>(null);
  const [data, setData] = useState<unknown | null>(null);

  // const { setloader } = useLoading();
  //get base url
  //get query
  useEffect(() => {
    showData();
    console.log(data);
  }, []);

  const showData = async () => {
    //query
    const query = `
    query IntrospectionQuery {
      __schema {
        types {
          name
          kind
          description
          fields {
            name
            description
            args {
              name
              description
              type {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

    try {
      const resp = await fetch('https://rickandmortyapi.com/graphql', {
        // <-- base url
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      });
      const data = await resp.json();
      setData(data);
    } catch {
      console.error('error');
    }
  };

  const handlerEditor = () => {
    if (refEditor.current) {
      const code = refEditor.current.editor.getValue();
      console.log(code);
    }
  };

  return (
    <div className={styles.editor_wrapper} data-testid="editor">
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
