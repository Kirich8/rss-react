import './header.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';

type HeaderProps = {
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
};

const Header = ({ setQuery }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('input_value') || ''
  );
  const [searchParams] = useSearchParams();

  const clearSearchParams = () => {
    searchParams.delete('search');
    setQuery(searchParams, searchParams.size !== 0);
  };

  useEffect(() => {
    if (!searchValue) {
      clearSearchParams();
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <header className="header">
      <h1 className="header__title">Marvel Heroes</h1>
      <div className="header__searchbox searchbox">
        <SearchInput
          setQuery={setQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SearchButton
          setQuery={setQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </header>
  );
};

export default Header;
