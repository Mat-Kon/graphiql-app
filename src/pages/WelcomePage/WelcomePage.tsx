import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import Footer from '../../components/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';

const WelcomePage = () => {
  const [user] = useAuthState(auth);
  const { translations, currentLanguage } = useLanguageContext();
  return (
    <>
      <div className={styles.buttons}>
        {user ? (
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
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{translations[currentLanguage].welcome}</h1>
          <p className={styles.paragraph}>{translations[currentLanguage].paragraph1}</p>
          <p className={styles.paragraph}>{translations[currentLanguage].paragraph2}</p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.name}>{translations[currentLanguage].konstantin} (@mat-kon)</p>
              <ul className={styles.description}>
                <li>{translations[currentLanguage].line1}</li>
                <li>{translations[currentLanguage].line2}</li>
                <li>{translations[currentLanguage].line3}</li>
                <li>{translations[currentLanguage].line4}</li>
                <li>{translations[currentLanguage].line12}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <p className={styles.name}>{translations[currentLanguage].eugenia} (@iozefavichus)</p>
              <ul className={styles.description}>
                <li>{translations[currentLanguage].line5}</li>
                <li>{translations[currentLanguage].line6}</li>
                <li>{translations[currentLanguage].line7}</li>
                <li>{translations[currentLanguage].line8}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <p className={styles.name}>{translations[currentLanguage].olya} (@lustrochka)</p>
              <ul className={styles.description}>
                <li>{translations[currentLanguage].line9}</li>
                <li>{translations[currentLanguage].line10}</li>
                <li>{translations[currentLanguage].line11}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default WelcomePage;
