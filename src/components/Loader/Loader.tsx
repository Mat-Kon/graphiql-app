import styles from './index.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.wrapper}>
        <div className={styles.img} data-testid="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
