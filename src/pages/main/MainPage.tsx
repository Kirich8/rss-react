import './main-page.css';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { CharactersContext } from '../../utils/context/CharactersContext';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import Pagination from '../../components/pagination/Pagination';
import ErrorButton from '../../components/error-button/ErrorButton';
import CardsCountSelector from '../../components/cards-count-selector/CardsCountSelector';
import setQuery from '../../utils/helpers/set-query';
import CardList from '../../components/card-list/CardList';

const MainPage = () => {
  const { characters, setCharacters } = useContext(CharactersContext);
  const [totalPage, setTotalPage] = useState(0);
  const [limitItems, setLimitItems] = useState('12');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchValue = useSelector(
    (state: AppState) => state.search.searchValue
  );
  const detailsId = searchParams.get('details');
  const currentPage = searchParams.get('page') || '1';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const offset = +limitItems * (+currentPage - 1);
      const characters = searchValue
        ? await apiService.getCharactersByName(+limitItems, offset, searchValue)
        : await apiService.getCharacters(+limitItems, offset);

      setCharacters(characters.results);
      setTotalPage(Math.ceil(characters.total / characters.limit));
      setIsLoading(false);
    };

    fetchData();
  }, [searchValue, limitItems, currentPage]);

  return (
    <div className="main__catalog catalog">
      <div
        className={`catalog__content ${detailsId ? 'blur' : ''}`}
        onClick={() => {
          if (detailsId) {
            searchParams.delete('details');
            setQuery(navigate, searchParams, searchParams.size !== 0);
          }
        }}
      >
        <div className="catalog__settings">
          <ErrorButton />
          <CardsCountSelector
            limitItems={limitItems}
            setLimitItems={setLimitItems}
          />
        </div>
        <CardList isLoading={isLoading} />
        {!isLoading && characters.length ? (
          <Pagination totalPage={totalPage} />
        ) : null}
      </div>
      {detailsId && <Outlet />}
    </div>
  );
};

export default MainPage;
