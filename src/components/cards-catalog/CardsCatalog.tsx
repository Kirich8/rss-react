import './cards-catalog.css';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { ICharacter } from '../../utils/types/ICharacter';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';
import CardNotFound from '../card-not-found/CardNotFound';
import Pagination from '../pagination/Pagination';
import ErrorButton from '../error-button/ErrorButton';
import CardsCountSelector from '../cards-count-selector/CardsCountSelector';
import setQuery from '../../utils/helpers/set-query';

type CardsCatalogPropsType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const CardsCatalog = ({
  setCurrentPage,
  currentPage,
}: CardsCatalogPropsType) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
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
        <div className="catalog__items">
          {isLoading ? (
            <Loader />
          ) : characters.length ? (
            characters.map((character) => {
              return <HeroCard key={character.id} character={character} />;
            })
          ) : (
            <CardNotFound />
          )}
        </div>
        <div className="catalog__pagination">
          {!isLoading && characters.length ? (
            <Pagination
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </div>
      </div>
      {detailsId ? <Outlet /> : null}
    </div>
  );
};

export default CardsCatalog;
