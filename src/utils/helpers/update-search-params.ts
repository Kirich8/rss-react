import { NextRouter } from 'next/router';

export const updateSearchParams = (
  router: NextRouter,
  queryName: string,
  queryValue: string,
  resetPage?: boolean
) => {
  const query = router.query;

  queryValue ? (query[queryName] = queryValue) : delete query[queryName];
  resetPage ? (query['page'] = '1') : '';

  router.push({
    pathname: window.location.origin,
    query,
  });
};
