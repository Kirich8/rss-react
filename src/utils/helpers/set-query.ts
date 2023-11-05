import { NavigateFunction, createSearchParams } from 'react-router-dom';

const setQuery = (
  navigate: NavigateFunction,
  searchParams: URLSearchParams,
  hasPrevParams: boolean
) => {
  navigate(
    { pathname: '', search: createSearchParams(searchParams).toString() },
    { replace: hasPrevParams }
  );
};

export default setQuery;
