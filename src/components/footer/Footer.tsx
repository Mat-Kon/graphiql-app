import React from 'react';
import styles from './index.module.css';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const Footer: React.FC = () => {
  const { translations, currentLanguage } = useLanguageContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.authors}>
          <ul className={styles.authors__list}>
            <li className={styles.authors__item}>
              <img src="assets/icons/github-logo.png" alt="github logo" width={25} height={25} />
              <a
                href="https://github.com/Mat-Kon"
                className={styles.authors__link}
                target="_blank"
                rel="noreferrer"
              >
                {translations[currentLanguage].konstantin}
              </a>
            </li>
            <li className={styles.authors__item}>
              <img src="assets/icons/github-logo.png" alt="github logo" width={25} height={25} />
              <a
                href="https://github.com/iozefavichus"
                className={styles.authors__link}
                target="_blank"
                rel="noreferrer"
              >
                {translations[currentLanguage].eugenia}
              </a>
            </li>
            <li className={styles.authors__item}>
              <img src="assets/icons/github-logo.png" alt="github logo" width={25} height={25} />
              <a
                href="https://github.com/lustrochka"
                className={styles.authors__link}
                target="_blank"
                rel="noreferrer"
              >
                {translations[currentLanguage].olya}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.year}>
          <h3>&copy; 2023</h3>
        </div>

        <a href="https://rs.school/" className={styles.rss_link} target="_blank" rel="noreferrer">
          <img src="assets/icons/rs_school.svg" alt="school icon" width={100} height={50} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
