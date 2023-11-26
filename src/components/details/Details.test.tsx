import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { mockCharacters } from '../../utils/tests/mock-characters';
import Details from './Details';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Tests for the Detailed Card component', () => {
  test('Make sure the detailed card component correctly displays the detailed card data', () => {
    mockRouter.push(`/?page=1&limit=3&details=${mockCharacters[0].id}`);

    const { container } = render(<Details character={[mockCharacters[0]]} />);

    expect(container).toHaveTextContent(mockCharacters[0].name);
    expect(container).toHaveTextContent(mockCharacters[0].description);
    expect(container).toHaveTextContent('Comics with a hero');
  });

  test('Ensure that clicking the close button hides the component', () => {
    mockRouter.push(`/?page=1&limit=3&details=${mockCharacters[0].id}`);

    const { getByText } = render(<Details character={[mockCharacters[0]]} />);

    const closeButton = getByText('x');

    fireEvent.click(closeButton);

    expect(mockRouter.query).toStrictEqual({ page: '1', limit: '3' });
  });

  test('displays "Description is missing" when character details do not have a description', async () => {
    mockRouter.push(`/?page=1&limit=3&details=${mockCharacters[2].id}`);

    const { container } = render(<Details character={[mockCharacters[2]]} />);

    expect(container).toHaveTextContent(mockCharacters[2].name);
    expect(container).toHaveTextContent('Description is missing');
    expect(container).toHaveTextContent('Comics with a hero');
  });
});
