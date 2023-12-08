import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const Header: React.FC = () => {
  const isAuth = false;
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
  }, []);
  return (
    <header className={isSticky ? styles.header : [styles.header, styles.sticky].join(' ')}>
      {isAuth ? (
        <div className={styles.wrapper}>
          <Link to={'/'} className={styles.btns}>
            {translations[currentLanguage].welcome}
          </Link>
          <div className={[styles.btns_container, styles.auth].join(' ')}>
            <Link to={'/'} className={styles.btns}>
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
