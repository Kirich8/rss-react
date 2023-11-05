import './header.css';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';
import setQuery from '../../utils/helpers/set-query';

type HeaderProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ setCurrentPage }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('input_value') || ''
  );
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const clearSearchParams = () => {
    searchParams.delete('search');
    setQuery(navigate, searchParams, searchParams.size !== 0);
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
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
        <SearchButton
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
