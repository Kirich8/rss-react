import './cards-catalog.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { ICharacter } from '../../utils/types/ICharacter';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';
import CardNotFound from '../card-not-found/CardNotFound';
import Pagination from '../pagination/Pagination';
import ErrorButton from '../error-button/ErrorButton';
import CardsCountSelector from '../cards-count-selector/CardsCountSelector';

type CardsCatalogProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: (searchParams: URLSearchParams, hasPrevParams: boolean) => void;
};

const CardsCatalog = ({
  setQuery,
  setCurrentPage,
  currentPage,
}: CardsCatalogProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limitItems, setLimitItems] = useState('12');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const offset = +limitItems * (currentPage - 1);
      const characters = searchValue
        ? await apiService.getCurrentCharacter(+limitItems, offset, searchValue)
        : await apiService.getCharacters(+limitItems, offset);

      searchParams.set('page', currentPage.toString());

      setCharacters(characters.results);
      setTotalPage(Math.ceil(characters.total / characters.limit));
      setIsLoading(false);
      setQuery(searchParams, searchParams.size !== 0);
    };

    fetchData();
  }, [searchValue, limitItems, currentPage]);

  return (
    <div className="catalog">
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
  );
};

export default CardsCatalog;
