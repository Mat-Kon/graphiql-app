import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';
// import MainPage from '../../pages/MainPage/MainPage';
// import AuthPage from '../../pages/AuthPage/AuthPage';

const CheckAuth = () => {
//   const [user] = useAuthState(auth);
//   console.log(user);
  //   return    user ? <MainPage /> : <AuthPage />;
  return true;
};

export default CheckAuth;
