import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFoundPage from '../pages/not-found/NotFoundPage';

describe('Test for the App component', () => {
  test('Renders NotFoundPage for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText('You have found a secret place.')
    ).toBeInTheDocument();
  });
});
