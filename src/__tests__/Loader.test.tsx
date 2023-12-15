import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from '../components/Loader/Loader';

describe('Loader', () => {
  it('renders loader', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
