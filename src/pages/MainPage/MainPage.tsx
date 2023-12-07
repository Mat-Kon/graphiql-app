import Answer from '../../components/Answer/Answer';
import Docs from '../../components/Docs/Docs';
import Main from '../../components/Main/Main';
import styles from './mainpage.module.css';

const MainPage = () => {
  return (
    <div className={styles.main_container}>
      <Main />
      <Answer />
      <Docs />
    </div>
  );
};
export default MainPage;
