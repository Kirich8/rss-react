import './main-page.css';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import ErrorButton from '../../components/error-button/ErrorButton';
import CardsCountSelector from '../../components/cards-count-selector/CardsCountSelector';
import setQuery from '../../utils/helpers/set-query';
import CardList from '../../components/card-list/CardList';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const detailsId = searchParams.get('details');
  const navigate = useNavigate();

  function catalogClickHandler() {
    if (detailsId) {
      searchParams.delete('details');
      setQuery(navigate, searchParams, searchParams.size !== 0);
    }
  }

  return (
    <div className="main__catalog catalog">
      <div
        className={`catalog__content ${detailsId ? 'blur' : ''}`}
        onClick={catalogClickHandler}
      >
        <div className="catalog__settings">
          <ErrorButton />
          <CardsCountSelector />
        </div>
        <CardList />
      </div>
      {detailsId && <Outlet />}
    </div>
  );
};

export default MainPage;
