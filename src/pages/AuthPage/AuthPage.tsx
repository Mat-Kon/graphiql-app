import SignUp from '../../components/SignUp/SignUp';
import styles from './auth.module.css';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};
export default AuthPage;
