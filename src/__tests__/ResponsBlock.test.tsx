import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ResponsBlock from '../components/ResponsBlock/ResponsBlock';

describe('ResponsBlock', () => {
  it('render textarea', () => {
    const { getByRole } = render(<ResponsBlock />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
