import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('Tests for the ErrorBoundary component', () => {
  const DummyComponent: React.FC = () => <div>Normal Component</div>;

  test('Renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>
    );

    const normalComponent = screen.getByText(/Normal Component/i);
    expect(normalComponent).toBeInTheDocument();
  });
});
