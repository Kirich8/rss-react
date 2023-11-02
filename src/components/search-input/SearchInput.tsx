import './search-input.css';
import { useSearchParams } from 'react-router-dom';

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
};

const SearchInput = ({
  searchValue,
  setSearchValue,
  setCurrentPage,
  setQuery,
}: SearchInputProps) => {
  const [searchParams] = useSearchParams();

  return (
    <input
      className="searchbox__search"
      value={searchValue}
      placeholder="name starts with"
      onChange={(event) => setSearchValue(event.currentTarget.value)}
      onKeyUp={(event) => {
        if (event.code === 'Enter' && searchValue) {
          searchParams.set('search', searchValue);
          setQuery(searchParams, searchParams.size !== 0);
          setCurrentPage(1);
        }

        localStorage.setItem('input_value', searchValue);
      }}
    ></input>
  );
};

export default SearchInput;
