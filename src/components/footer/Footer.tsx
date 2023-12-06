import React from 'react';
import styles from './index.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="authors">
        <ul className="authors__list">
          <li className="authors__item">
            <a href="#" className="authors__link">
              Konstantin
            </a>
          </li>
          <li className="authors__item">
            <a href="#" className="authors__link">
              Eugenia
            </a>
          </li>
          <li className="authors__item">
            <a href="#" className="authors__link">
              Olya
            </a>
          </li>
        </ul>
      </div>

      <div className="year">
        <h5>2023</h5>
      </div>

      <div className=""></div>
    </footer>
  );
};

export default Footer;
