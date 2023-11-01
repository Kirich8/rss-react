import './search-input.css';
import { useSearchParams } from 'react-router-dom';

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
};

const SearchInput = ({
  searchValue,
  setSearchValue,
  setQuery,
}: SearchInputProps) => {
  const [searchParams] = useSearchParams();

  return (
    <input
      className="searchbox__search"
      value={searchValue}
      onChange={(event) => setSearchValue(event.currentTarget.value)}
      onKeyUp={(event) => {
        if (event.code === 'Enter' && searchValue) {
          searchParams.set('search', searchValue);
          setQuery(searchParams, searchParams.size !== 0);
        }

        localStorage.setItem('input_value', searchValue);
      }}
    ></input>
  );
};

export default SearchInput;
