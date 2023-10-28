import './search-button.css';
import React from 'react';

type SearchButtonProps = {
  handlerButton: (character: string) => void;
  searchValue: string;
};

class SearchButton extends React.Component<SearchButtonProps> {
  render(): React.ReactNode {
    return (
      <button
        className="searchbox__button"
        onClick={() => {
          this.props.handlerButton(this.props.searchValue);
        }}
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
