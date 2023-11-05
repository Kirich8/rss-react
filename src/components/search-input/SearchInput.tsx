import setQuery from '../../utils/helpers/set-query';
import './search-input.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

type SearchInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchInput = ({
  searchValue,
  setSearchValue,
  setCurrentPage,
}: SearchInputProps) => {
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
