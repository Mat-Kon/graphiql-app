import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ResponsBlock from '../components/ResponsBlock/ResponsBlock';
import { Provider } from 'react-redux';
import { store } from '../utils/redux/store';

describe('ResponsBlock', () => {
  it('render textarea', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ResponsBlock />
      </Provider>
    );

    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
