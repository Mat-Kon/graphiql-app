import { render } from '@testing-library/react';
import { LanguageProvider } from './switch-lang/langContext';
import { FC, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

interface Props {
  children: ReactElement;
}

const WrapperElement: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </LanguageProvider>
    </Provider>
  );
};

export const renderer = (component: ReactElement) => render(component, { wrapper: WrapperElement });
