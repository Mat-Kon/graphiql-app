import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderer } from '../utils/renderer';
import FormatBtn from '../components/FormatBtn/FormatBtn';

describe('FormatBtn', () => {
  test('render btn', () => {
    renderer(<FormatBtn content="Format" className="btn-format" />);

    const formatBtn = screen.getByText('Format');

    expect(formatBtn).toBeInTheDocument();
  });
});
