import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderer } from '../utils/renderer';
import BtnRequest from '../components/BtnRequest/BtnRequest';

describe('BtnRequest', () => {
  it('render btn', async () => {
    renderer(<BtnRequest name="Request" className="btn-request" />);

    const requestBtn = screen.getByText('Request');

    expect(requestBtn).toBeInTheDocument();
  });
});
