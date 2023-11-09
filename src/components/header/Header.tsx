import './header.css';
import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../utils/context/SearchContext';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';
import setQuery from '../../utils/helpers/set-query';

type HeaderProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ setCurrentPage }: HeaderProps) => {
  const { searchValue } = useContext(SearchContext);
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
        <SearchInput setCurrentPage={setCurrentPage} />
        <SearchButton setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;
