import { useNavigate, useSearchParams } from 'react-router-dom';
import setQuery from '../../utils/helpers/set-query';

type SearchButtonProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchButton = ({
  searchValue,
  setSearchValue,
  setCurrentPage,
}: SearchButtonProps) => {
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
