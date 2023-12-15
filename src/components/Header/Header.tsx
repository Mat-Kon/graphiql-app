import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import { auth, logout } from '../../utils/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header: React.FC = () => {
  const [user] = useAuthState(auth);
  const { translations, currentLanguage, changeLanguage } = useLanguageContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user]);

  const Out = () => {
    logout();
  };

  return (
    <header
      className={isSticky ? styles.header : [styles.header, styles.sticky].join(' ')}
      data-testid="sticky-header"
    >
      {user ? (
        <div className={styles.wrapper}>
          <Link to={'/'} className={styles.btns}>
            {translations[currentLanguage].welcome}
          </Link>
          <div className={[styles.btns_container, styles.auth].join(' ')}>
            <Link to={'/'} className={styles.btns} onClick={Out}>
              {translations[currentLanguage].logout}
            </Link>
            <span className={styles.switch_ln} onClick={changeLanguage}>
              {currentLanguage}
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper} style={{ justifyContent: 'flex-end' }}>
          <div className={styles.btns_container}>
            <Link to={'/auth'} className={styles.btns}>
              {translations[currentLanguage].login}
            </Link>
            <Link to={'/regitstartion'} className={styles.btns}>
              {translations[currentLanguage].signup}
            </Link>
            <span className={styles.switch_ln} onClick={changeLanguage}>
              {currentLanguage}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
