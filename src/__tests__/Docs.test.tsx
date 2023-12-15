import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Docs from '../components/Docs/Docs';

describe('Docs', () => {
  it('render docs container', () => {
    const { getByTestId } = render(<Docs />);

    expect(getByTestId('docs')).toBeInTheDocument();
  });
});
