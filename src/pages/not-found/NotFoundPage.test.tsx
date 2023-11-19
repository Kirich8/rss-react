import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Layout from '../../layout/Layout';

describe('10. "Tests for the 404 Page component"', () => {
  it('10.1 "Ensure that the 404 page is displayed when navigating to an invalid route"', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-page']}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    const headingElement = screen.getByRole('heading', {
      name: /You have found a secret place/i,
    });

    const imageElement = screen.getByAltText('Oops');
    expect(headingElement).toBeDefined();
    expect(imageElement).toBeDefined();
  });
});
