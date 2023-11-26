import { changeSearchValue } from '@/store/searchSlice';
import { INITIAL_SEARCH } from '@/utils/constants/constants';
import { updateSearchParams } from '@/utils/helpers/update-search-params';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchValue = (router.query.search as string) || INITIAL_SEARCH;
  const inputSearchValue = useRef(searchValue);

  const formSubmitHandler = (value: string) => {
    localStorage.setItem('marvel:search-value', value);
    dispatch(
      changeSearchValue({
        searchValue: value,
      })
    );
    updateSearchParams(router, 'search', value, true);
  };

  return (
    <header className="header">
      <h1 className="header__title">Marvel Heroes</h1>
      <form
        className="header__searchbox searchbox"
        onSubmit={(event) => {
          event.preventDefault();
          formSubmitHandler(inputSearchValue.current);
        }}
      >
        <input
          className="searchbox__search"
          placeholder="name starts with"
          defaultValue={searchValue}
          onChange={(event) => (inputSearchValue.current = event.target.value)}
        />
        <button className="button">Search</button>
      </form>
    </header>
  );
};

export default Header;
