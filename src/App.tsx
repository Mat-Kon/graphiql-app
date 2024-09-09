import { RouterProvider } from 'react-router-dom';
import router from './router/AppRouter';
import { LanguageProvider } from './utils/switch-lang/langContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />;
    </LanguageProvider>
  );
};

export default App;
