import ace from 'ace-builds';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import styles from './respons.module.css';

const ResponsBlock = () => {
  const respons = useAppSelector((store) => store.respons.respons);
  const [curValue, setCurValue] = useState('');

  useEffect(() => {
    if (respons) {
      const data = JSON.stringify(respons, null, 2);
      setCurValue(data);
    }
  }, [respons]);

  return (
    <div className={styles.resp__container}>
      <AceEditor
        value={curValue}
        className={styles.resp__view}
        readOnly={true}
        name="response"
        height="95%"
        width="95%"
        mode="graphqlschema"
        theme="xcode"
        fontSize={14}
      />
      {/* <textarea readOnly={true} id={styles.resp__view} value={curValue}></textarea> */}
    </div>
  );
};

export default ResponsBlock;
