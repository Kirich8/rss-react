import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CharactersContextProvider from './CharactersContext';

describe('Tests for the CharactersContextProvider component', () => {
  it('Renders children components', () => {
    const { getByTestId } = render(
      <CharactersContextProvider>
        <div data-testid="child-component">Child Component</div>
      </CharactersContextProvider>
    );

    const childComponent = getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
  });
});
