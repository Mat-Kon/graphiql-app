import styles from './auth.module.css';
import SignIn from '../../components/SignIn/SignIn';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};
export default AuthPage;
