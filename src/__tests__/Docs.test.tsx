import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Docs from '../components/Docs/Docs';

describe('Docs component', () => {
  it('renders the closed state by default', () => {
    const { getByTestId, queryByText } = render(<Docs />);

    const docsContainer = getByTestId('docs');
    const openDocs = queryByText('Here will be Docs');

    expect(docsContainer).toHaveClass('docs_container_close');
    expect(openDocs).toBeNull();
  });

  it('toggles open/close state on button click', () => {
    const { getByTestId, getByText } = render(<Docs />);

    const docsContainer = getByTestId('docs');
    const toggleButton = getByText('btn');

    fireEvent.click(toggleButton);

    expect(docsContainer).toHaveClass('docs_container_open');
    expect(getByText('Here will be Docs')).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(docsContainer).toHaveClass('docs_container_close');
  });
});
