import AuthPage from '../pages/AuthPage/AuthPage';
import Layout from '../pages/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RegistrationPage from '../pages/Registration/Registration';
import MainPage from '../pages/MainPage/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={null}>
      <Route index element={<WelcomePage />} />
      <Route
        path="auth"
        element={
          <Layout>
            <AuthPage />
          </Layout>
        }
      />
      <Route
        path="regitstartion"
        element={
          <Layout>
            <RegistrationPage />
          </Layout>
        }
      />
      <Route
        path="main"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
