import './search-input.css';
import React from 'react';

type SearchInputProps = {
  handlerInput: (value: string) => void;
};

class SearchInput extends React.Component<SearchInputProps> {
  render(): React.ReactNode {
    return (
      <input
        type="search"
        className="searchbox__search"
        onChange={(event) =>
          this.props.handlerInput(event.currentTarget.value.trim())
        }
      ></input>
    );
  }
}

export default SearchInput;
