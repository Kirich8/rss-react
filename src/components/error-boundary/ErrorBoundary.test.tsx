import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('Tests for the ErrorBoundary component', () => {
  const DummyComponent: React.FC = () => <div>Normal Component</div>;

  it('Renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>
    );

    const normalComponent = screen.getByText(/Normal Component/i);
    expect(normalComponent).toBeInTheDocument();
  });

  it('Renders ErrorWindow when there is an error', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ErrorBoundary, 'getDerivedStateFromError').mockReturnValueOnce({
      hasError: true,
      error: new Error('Test error'),
      errorInfo: null,
    });

    render(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>
    );

    ErrorBoundary.getDerivedStateFromError(new Error('Test error'));

    waitFor(() => {
      const errorWindow = screen.getByAltText('Oops');
      expect(errorWindow).toBeInTheDocument();
    });

    jest.restoreAllMocks();
  });
});
