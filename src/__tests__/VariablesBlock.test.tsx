import '@testing-library/jest-dom';
import { renderer } from '../utils/renderer';
import { screen, fireEvent } from '@testing-library/react';
import VariablesBlock from '../components/VariablesBlock/VariablesBlock';

describe('VariablesBlock', () => {
  it('switches between editors', () => {
    const { container } = renderer(<VariablesBlock />);
    const headersBtn = screen.getByText('Headers');
    const varsBtn = screen.getByText('Variables');
    fireEvent.click(headersBtn);
    expect(container.querySelector('#headers')).toBeInTheDocument;
    fireEvent.click(varsBtn);
    expect(container.querySelector('#variables')).toBeInTheDocument;
  });
});
