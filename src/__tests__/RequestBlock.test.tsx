import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import RequestBlock from '../components/RequestBlock/RequestBlock';
import { renderer } from '../utils/renderer';

describe('RequestBlock', () => {
  it('renders URL textarea and buttons container', () => {
    renderer(<RequestBlock />);

    const urlTextarea = screen.getByTestId('url-textarea');
    expect(urlTextarea).toBeInTheDocument();
    expect(urlTextarea).toHaveAttribute('placeholder', 'URL');

    const buttonsContainer = screen.getByTestId('req-btns-container');
    expect(buttonsContainer).toBeInTheDocument();

    const editor = screen.queryByTestId('editor');
    expect(editor).toBeInTheDocument();

    const variablesContainer = screen.queryByTestId('var-container');
    expect(variablesContainer).toBeInTheDocument();
  });

  it('updates URL textarea value', () => {
    renderer(<RequestBlock />);

    const urlTextarea = screen.getByTestId('url-textarea');

    fireEvent.change(urlTextarea, { target: { value: 'https://example.com/api' } });

    expect(urlTextarea).toHaveValue('https://example.com/api');
  });
});
