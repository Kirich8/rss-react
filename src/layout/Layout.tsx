import Header from '../components/header/Header';
import {
  Outlet,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import CardsCatalog from '../components/cards-catalog/CardsCatalog';
import ErrorButton from '../components/error-button/ErrorButton';

const Layout = () => {
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
      <Header setQuery={setQuery} />
      <div className="main">
        <div className="content">
          <ErrorButton />
          <CardsCatalog />
        </div>
        <div className="details">
          <Outlet />
        </div>
      </div>
      <div className="footer">2023</div>
    </div>
  );
};

export default Layout;
