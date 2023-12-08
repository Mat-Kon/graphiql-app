// import SignIn from '../../components/SignIn/SignIn';
import styles from './auth.module.css';
// import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
};
export default AuthPage;
