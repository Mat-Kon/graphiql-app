import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const NotFoundPage = () => {
  const { translations, currentLanguage } = useLanguageContext();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.paragraph}>{translations[currentLanguage].notfound}</p>
        <p>{translations[currentLanguage].try}</p>
        <Link to="/">
          <button className={styles.button}>{translations[currentLanguage].text404}</button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
