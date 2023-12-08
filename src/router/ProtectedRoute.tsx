import { Navigate } from 'react-router-dom';

const ProtectedRoute = (user: boolean) => {
  if (!user) {
    return <Navigate to="/auth" replace={true} />;
  }
  if (user) {
    return <Navigate to="/main" replace={true} />;
  }
};

export default ProtectedRoute;
