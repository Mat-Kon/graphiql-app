import styles from './auth.module.css';
import SignIn from '../../components/SignIn/SignIn';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};
export default AuthPage;
