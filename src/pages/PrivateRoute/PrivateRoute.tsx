import { ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/Firebase';

interface Props {
  children: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={'/'} replace />;
  }

  return children;
};

export default PrivateRoute;
