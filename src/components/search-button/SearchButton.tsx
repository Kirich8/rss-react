import { useSearchParams } from 'react-router-dom';

type SearchButtonProps = {
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SearchButton = ({
  setQuery,
  searchValue,
  setSearchValue,
  setCurrentPage,
}: SearchButtonProps) => {
  const [searchParams] = useSearchParams();

  return (
    <button
      className="button"
      onClick={() => {
        setSearchValue(searchValue);
        setCurrentPage(1);

        if (searchValue) {
          searchParams.set('search', searchValue);
          setQuery(searchParams, searchParams.size !== 0);
        }

        localStorage.setItem('input_value', searchValue);
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
