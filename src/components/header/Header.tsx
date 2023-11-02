import './header.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';

type HeaderProps = {
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ setQuery, setCurrentPage }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('input_value') || ''
  );
  const [searchParams] = useSearchParams();

  const clearSearchParams = () => {
    searchParams.delete('search');
    setQuery(searchParams, searchParams.size !== 0);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!searchValue) {
      clearSearchParams();
    }
  }, [searchValue]);

  return (
    <header className="header">
      <h1 className="header__title">Marvel Heroes</h1>
      <div className="header__searchbox searchbox">
        <SearchInput
          setQuery={setQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
        <SearchButton
          setQuery={setQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
