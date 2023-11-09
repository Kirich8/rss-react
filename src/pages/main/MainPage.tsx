import './main-page.css';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { CharactersContext } from '../../utils/context/CharactersContext';
import Pagination from '../../components/pagination/Pagination';
import ErrorButton from '../../components/error-button/ErrorButton';
import CardsCountSelector from '../../components/cards-count-selector/CardsCountSelector';
import setQuery from '../../utils/helpers/set-query';
import CardsCatalog from '../../components/cards-catalog/CardsCatalog';

type MainPageProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const MainPage = ({ setCurrentPage, currentPage }: MainPageProps) => {
  const { characters, setCharacters } = useContext(CharactersContext);
  const [totalPage, setTotalPage] = useState(0);
  const [limitItems, setLimitItems] = useState('12');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const detailsId = searchParams.get('details');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const offset = +limitItems * (currentPage - 1);
      const characters = searchValue
        ? await apiService.getCharactersByName(+limitItems, offset, searchValue)
        : await apiService.getCharacters(+limitItems, offset);

      searchParams.set('page', currentPage.toString());

      setCharacters(characters.results);
      setTotalPage(Math.ceil(characters.total / characters.limit));
      setIsLoading(false);
      setQuery(navigate, searchParams, searchParams.size !== 0);
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
            setCurrentPage={setCurrentPage}
          />
        </div>
        <CardsCatalog isLoading={isLoading} />
        {!isLoading && characters.length ? (
          <div className="catalog__pagination">
            <Pagination
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : null}
      </div>
      {detailsId ? <Outlet /> : null}
    </div>
  );
};

export default MainPage;
