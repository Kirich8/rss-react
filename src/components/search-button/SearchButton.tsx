import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../utils/context/SearchContext';
import setQuery from '../../utils/helpers/set-query';

type SearchButtonProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchButton = ({ setCurrentPage }: SearchButtonProps) => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <button
      className="button"
      onClick={() => {
        setSearchValue(searchValue);
        setCurrentPage(1);

        if (searchValue) {
          searchParams.set('search', searchValue);
          setQuery(navigate, searchParams, searchParams.size !== 0);
        }

        localStorage.setItem('input_value', searchValue);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
