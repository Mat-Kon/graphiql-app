// import SignIn from '../../components/SignIn/SignIn';
import styles from './auth.module.css';
import SignUp from '../../components/SignUp/SignUp';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};
export default AuthPage;
