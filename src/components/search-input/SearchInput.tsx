import './search-input.css';

type SearchInputProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  enterButtonHandler: () => void;
};

const SearchInput = ({
  inputValue,
  setInputValue,
  enterButtonHandler,
}: SearchInputProps) => {
  return (
    <input
      className="searchbox__search"
      value={inputValue}
      placeholder="name starts with"
      onChange={(event) => setInputValue(event.currentTarget.value)}
      onKeyUp={(event) => {
        if (event.code === 'Enter') enterButtonHandler();
      }}
    />
  );
};

export default SearchInput;
