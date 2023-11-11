import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CardsCountSelector from './CardsCountSelector';

describe('Tests for the CardsCountSelector component', () => {
  it('Renders CardsCountSelector with default values', () => {
    const limitItems = '12';
    const setLimitItemsMock = jest.fn();
    const setCurrentPageMock = jest.fn();

    render(
      <CardsCountSelector
        limitItems={limitItems}
        setLimitItems={setLimitItemsMock}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const selectorLabel = screen.getByText(/Cards per page/i);
    const selectorSelect = screen.getByRole('combobox');

    expect(selectorLabel).toBeInTheDocument();
    expect(selectorSelect).toBeInTheDocument();
    expect(selectorSelect).toHaveValue('12');
  });

  it('Handles change event correctly', () => {
    const limitItems = '12';
    const setLimitItemsMock = jest.fn();
    const setCurrentPageMock = jest.fn();

    render(
      <CardsCountSelector
        limitItems={limitItems}
        setLimitItems={setLimitItemsMock}
        setCurrentPage={setCurrentPageMock}
      />
    );

    const selectorSelect = screen.getByRole('combobox');

    fireEvent.change(selectorSelect, { target: { value: '24' } });

    expect(setLimitItemsMock).toHaveBeenCalledWith('24');
    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });
});
