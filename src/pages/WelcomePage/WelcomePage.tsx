import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  const isAuth = false;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.paragraph}>
          This project is made as part of a course on studying react from the RSSchool. RS School is
          free-of-charge and community-based education program conducted by The Rolling Scopes
          developer community.
        </p>
        <p className={styles.paragraph}>
          Links to our repositories you can find further down the page.
        </p>
      </div>
      <div className={styles.buttons}>
        {isAuth ? (
          <Link to={'/main'} className={styles.link}>
            Main
          </Link>
        ) : (
          <>
            <Link to={'/auth'} className={styles.link}>
              Log in
            </Link>
            <Link to={'/regitstartion'} className={styles.link}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default WelcomePage;
