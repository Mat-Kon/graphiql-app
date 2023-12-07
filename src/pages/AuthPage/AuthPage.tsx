import SignIn from '../../components/SignIn/SignIn';
import styles from './auth.module.css';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};
export default AuthPage;
