import ResponsBlock from '../../components/ResponsBlock/ResponsBlock';
import Docs from '../../components/Docs/Docs';
import RequestBlock from '../../components/RequestBlock/RequestBlock';
import styles from './mainpage.module.css';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Docs />
      <RequestBlock />
      <ResponsBlock />
    </div>
  );
};
export default MainPage;
