import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error is thrown', () => {
    const ChildComponent = () => <div>Child component</div>;

    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });

  it('renders ErrorPage when an error is thrown', () => {
    const ChildWithError = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    );

    expect(getByText('An error has occurred')).toBeInTheDocument();
  });

  it('logs error and error information when an error occurs', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const ChildWithError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('This is error'));
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('This is information about your error')
    );

    consoleSpy.mockRestore();
  });
});
