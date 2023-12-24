import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import EditorWrapper from '../components/EditorWrapper/EditorWrapper';
import { renderer } from '../utils/renderer';

describe('EditorWrapper', () => {
  it('render editor', () => {
    renderer(<EditorWrapper />);

    const editor = screen.getByTestId('editor');
    expect(editor).toBeInTheDocument();
  });
});
