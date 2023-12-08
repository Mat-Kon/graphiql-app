import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const WelcomePage = () => {
  const isAuth = false;
  const { translations, currentLanguage } = useLanguageContext();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{translations[currentLanguage].welcome}</h1>
        <p className={styles.paragraph}>{translations[currentLanguage].paragraph1}</p>
        <p className={styles.paragraph}>{translations[currentLanguage].paragraph2}</p>
      </div>
      <div className={styles.buttons}>
        {isAuth ? (
          <Link to={'/main'} className={styles.link}>
            {translations[currentLanguage].main}
          </Link>
        ) : (
          <>
            <Link to={'/auth'} className={styles.link}>
              {translations[currentLanguage].login}
            </Link>
            <Link to={'/regitstartion'} className={styles.link}>
              {translations[currentLanguage].signup}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default WelcomePage;
