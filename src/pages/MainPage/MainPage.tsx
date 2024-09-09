import ResponsBlock from '../../components/ResponsBlock/ResponsBlock';
import Docs from '../../components/Docs/Docs';
import RequestBlock from '../../components/RequestBlock/RequestBlock';
import styles from './mainpage.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../utils/hooks/reduxHooks';

const MainPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const isLoading = useAppSelector((store) => store.loading.isLoading);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className={styles.wrapper}>
        <Docs />
        <RequestBlock />
        <ResponsBlock />
      </div>
    </>
  );
};
export default MainPage;
