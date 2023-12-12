import ResponsBlock from '../../components/ResponsBlock/ResponsBlock';
import Docs from '../../components/Docs/Docs';
import RequestBlock from '../../components/RequestBlock/RequestBlock';
import styles from './mainpage.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <Docs />
      <RequestBlock />
      <ResponsBlock />
    </div>
  );
};
export default MainPage;
