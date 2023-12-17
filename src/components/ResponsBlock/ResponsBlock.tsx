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
      <textarea readOnly={true} id={styles.resp__view} value={curValue}></textarea>
    </div>
  );
};

export default ResponsBlock;
