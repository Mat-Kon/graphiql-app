import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const isAuth = false;

  return (
    <header className={styles.header}>
      {isAuth ? (
        <div className={styles.wrapper}>
          <Link to={'/'} className={styles.btns}>
            Welcome
          </Link>
          <div className={styles.btns_container}>
            <Link to={'/'} className={styles.btns}>
              Sign Out
            </Link>
            <span className={styles.switch_ln}>EN</span>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper} style={{ justifyContent: 'flex-end' }}>
          <div className={styles.btns_container}>
            <Link to={'/auth'} className={styles.btns}>
              Log in
            </Link>
            <Link to={'/regitstartion'} className={styles.btns}>
              Sign Up
            </Link>
            <span className={styles.switch_ln}>EN</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
