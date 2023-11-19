import './header.css';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValue } from '../../store/searchSlice';
import SearchButton from '../search-button/SearchButton';
import SearchInput from '../search-input/SearchInput';
import setQuery from '../../utils/helpers/set-query';
import { selectSearchValue } from '../../store/selectors';

const Header = () => {
  const searchValue = useSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(searchValue);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateState = () => {
    dispatch(changeSearchValue(inputValue));

    searchParams.set('page', '1');

    inputValue
      ? searchParams.set('search', inputValue)
      : searchParams.delete('search');

    setQuery(navigate, searchParams, searchParams.size !== 0);
    localStorage.setItem('input_value', inputValue);
  };

  return (
    <header className="header">
      <h1 className="header__title">Marvel Heroes</h1>
      <div className="header__searchbox searchbox">
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          enterButtonHandler={updateState}
        />
        <SearchButton clickButtonHandler={updateState} />
      </div>
    </header>
  );
};

export default Header;
