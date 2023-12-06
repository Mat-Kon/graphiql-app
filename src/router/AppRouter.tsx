import AuthPage from '../pages/AuthPage/AuthPage';
import Layout from '../pages/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
