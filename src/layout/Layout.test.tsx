import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Tests for the Layout component', () => {
  it('Renders Header component', () => {
    const { container } = render(
      <BrowserRouter>
        <Layout setCurrentPage={() => {}} />
      </BrowserRouter>
    );

    const headerElement = container.getElementsByClassName('header');
    expect(headerElement[0]).toBeInTheDocument();
  });

  it('Displays the correct text in the footer', () => {
    const { container } = render(
      <BrowserRouter>
        <Layout setCurrentPage={() => {}} />
      </BrowserRouter>
    );

    const footerElement = container.getElementsByClassName('footer');
    expect(footerElement[0]).toHaveTextContent('2023');
  });
});
