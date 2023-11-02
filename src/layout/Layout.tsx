import Header from '../components/header/Header';
import {
  Outlet,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import CardsCatalog from '../components/cards-catalog/CardsCatalog';
import { useState } from 'react';

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const oldSearchValue = localStorage.getItem('input_value');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const setQuery = (searchParams: URLSearchParams, hasPrevParams: boolean) => {
    navigate(
      { pathname: '', search: createSearchParams(searchParams).toString() },
      { replace: hasPrevParams }
    );
  };

  if (oldSearchValue) {
    searchParams.set('search', oldSearchValue);
  }

  return (
    <div className="wrapper">
      <Header setQuery={setQuery} setCurrentPage={setCurrentPage} />
      <div className="main">
        <CardsCatalog
          setQuery={setQuery}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Outlet />
      </div>
      <div className="footer">2023</div>
    </div>
  );
};

export default Layout;
