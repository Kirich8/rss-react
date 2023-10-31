import './search-input.css';
import React from 'react';

type SearchInputProps = {
  searchValue: string;
  handlerInput: (value: string) => void;
};

const SearchInput = ({ searchValue, handlerInput }: SearchInputProps) => {
  return (
    <input
      type="search"
      className="searchbox__search"
      value={searchValue}
      onChange={(event) => handlerInput(event.currentTarget.value.trim())}
    ></input>
  );
};

export default SearchInput;
