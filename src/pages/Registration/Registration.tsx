import styles from './registration.module.css';
import SignUp from '../../components/SignUp/SignUp';

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};
export default RegistrationPage;
