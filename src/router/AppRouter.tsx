import AuthPage from '../pages/AuthPage/AuthPage';
import Layout from '../pages/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import CheckAuth from '../components/CheckAuth/CheckAuth';
import RegistrationPage from '../pages/Registration/Registration';
import MainPage from '../pages/MainPage/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="regitstartion" element={<RegistrationPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
