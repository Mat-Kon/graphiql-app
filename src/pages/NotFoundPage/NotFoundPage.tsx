import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.paragraph}>Page not found</p>
        <p>Try this:</p>
        <Link to="/">
          <button className={styles.button}>Go to main</button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
