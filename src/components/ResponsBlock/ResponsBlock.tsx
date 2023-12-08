import styles from './respons.module.css';

const ResponsBlock = () => {
  return (
    <div className={styles.resp__container}>
      <textarea readOnly={true} id={styles.resp__view}></textarea>
    </div>
  );
};

export default ResponsBlock;
