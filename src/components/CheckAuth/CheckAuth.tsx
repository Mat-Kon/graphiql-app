import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/Firebase';

const CheckAuth = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return user ? true : false;
};

export default CheckAuth;
