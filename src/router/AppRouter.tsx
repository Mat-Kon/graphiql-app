import AuthPage from '../pages/AuthPage/AuthPage';
import Layout from '../pages/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Main from '../components/Main/Main';
import CheckAuth from '../components/CheckAuth/CheckAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route
        path="main"
        element={
          <ProtectedRoute user={CheckAuth}>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
