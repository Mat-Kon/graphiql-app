import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ResponsBlock from '../components/ResponsBlock/ResponsBlock';
import { Provider } from 'react-redux';
import { store } from '../utils/redux/store';

describe('ResponsBlock', () => {
  it('render textarea', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <ResponsBlock />
      </Provider>
    );

    expect(getByTestId('response-block')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
