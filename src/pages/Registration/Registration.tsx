import styles from './registration.module.css';
import SignUp from '../../components/SignUp/SignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};
export default RegistrationPage;
