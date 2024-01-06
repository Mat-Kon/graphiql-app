import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import Docs from '../components/Docs/Docs';
import { renderer } from '../utils/renderer';

describe('Docs component', () => {
  it('renders the closed state by default', () => {
    renderer(<Docs />);

    const docsContainer = screen.getByTestId('docs');
    const openDocs = screen.queryByTestId('docs-content');

    expect(docsContainer).toHaveClass('docs_container_close');
    expect(openDocs).toBeNull();
  });

  it('toggles open/close state on button click', () => {
    renderer(<Docs />);

    const docsContainer = screen.getByTestId('docs');
    const openBtn = screen.getByText('Docs');

    fireEvent.click(openBtn);

    expect(docsContainer).toHaveClass('docs_container_open');
    expect(screen.getByTestId('docs-content')).toBeInTheDocument();
    const closeBtn = screen.getByText('Close docs');

    fireEvent.click(closeBtn);

    expect(docsContainer).toHaveClass('docs_container_close');
  });
});
