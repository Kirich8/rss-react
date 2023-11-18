import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
  test('renders SearchInput component', () => {
    const mockSetInputValue = jest.fn();
    const mockEnterButtonHandler = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchInput
        inputValue=""
        setInputValue={mockSetInputValue}
        enterButtonHandler={mockEnterButtonHandler}
      />
    );

    const inputElement = getByPlaceholderText('name starts with');
    fireEvent.change(inputElement, { target: { value: 'Test' } });

    expect(mockSetInputValue).toHaveBeenCalledTimes(1);
    expect(mockEnterButtonHandler).not.toHaveBeenCalled();
  });

  test('calls enterButtonHandler on pressing Enter key', () => {
    const mockSetInputValue = jest.fn();
    const mockEnterButtonHandler = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchInput
        inputValue=""
        setInputValue={mockSetInputValue}
        enterButtonHandler={mockEnterButtonHandler}
      />
    );

    const inputElement = getByPlaceholderText('name starts with');
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });

    expect(mockEnterButtonHandler).toHaveBeenCalledTimes(1);
    expect(mockSetInputValue).not.toHaveBeenCalled();
  });
});
