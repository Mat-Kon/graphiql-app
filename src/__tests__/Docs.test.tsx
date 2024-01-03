import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Docs from '../components/Docs/Docs';

describe('Docs component', () => {
  it('renders the closed state by default', () => {
    const { getByTestId, queryByTestId } = render(<Docs />);

    const docsContainer = getByTestId('docs');
    const openDocs = queryByTestId('docs-content');

    expect(docsContainer).toHaveClass('docs_container_close');
    expect(openDocs).toBeNull();
  });

  it('toggles open/close state on button click', () => {
    const { getByTestId, getByText } = render(<Docs />);

    const docsContainer = getByTestId('docs');
    const openBtn = getByText('Docs');

    fireEvent.click(openBtn);

    expect(docsContainer).toHaveClass('docs_container_open');
    expect(getByTestId('docs-content')).toBeInTheDocument();
    const closeBtn = getByText('Close docs');

    fireEvent.click(closeBtn);

    expect(docsContainer).toHaveClass('docs_container_close');
  });
});
