import './search-input.css';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../utils/context/SearchContext';
import setQuery from '../../utils/helpers/set-query';

type SearchInputProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchInput = ({ setCurrentPage }: SearchInputProps) => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <input
      className="searchbox__search"
      value={searchValue}
      placeholder="name starts with"
      onChange={(event) => setSearchValue(event.currentTarget.value)}
      onKeyUp={(event) => {
        if (event.code === 'Enter' && searchValue) {
          searchParams.set('search', searchValue);
          setQuery(navigate, searchParams, searchParams.size !== 0);
          setCurrentPage(1);
        }

        localStorage.setItem('input_value', searchValue);
      }}
    ></input>
  );
};

export default SearchInput;
