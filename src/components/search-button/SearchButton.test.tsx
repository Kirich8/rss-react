import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SearchButton from './SearchButton';

describe('SearchButton Component', () => {
  test('renders SearchButton component', () => {
    const mockClickButtonHandler = jest.fn();

    const { getByText } = render(
      <SearchButton clickButtonHandler={mockClickButtonHandler} />
    );

    const buttonElement = getByText('Search');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls clickButtonHandler on button click', () => {
    const mockClickButtonHandler = jest.fn();

    const { getByText } = render(
      <SearchButton clickButtonHandler={mockClickButtonHandler} />
    );

    const buttonElement = getByText('Search');
    fireEvent.click(buttonElement);

    expect(mockClickButtonHandler).toHaveBeenCalledTimes(1);
  });
});
