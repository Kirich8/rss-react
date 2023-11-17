import './card-list.css';
import { charactersApi } from '../../utils/services/charactersApi';
import { ICharacter } from '../../utils/types/ICharacter';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import Pagination from '../pagination/Pagination';
import CardNotFound from '../card-not-found/CardNotFound';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';

const CardList = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const limitItems = useSelector(
    (state: AppState) => state.itemsPerPage.itemsPerPageCount
  );
  const searchValue = useSelector(
    (state: AppState) => state.search.searchValue
  );

  const offset = limitItems * (+currentPage - 1);

  const { data, isFetching } = searchValue
    ? charactersApi.useGetCharactersByNameQuery({
        limit: limitItems,
        offset,
        name: searchValue,
      })
    : charactersApi.useGetCharactersQuery({
        limit: limitItems,
        offset,
      });

  const totalItems = data?.total as number;
  const totalPage = Math.ceil(totalItems / limitItems);

  return (
    <>
      <div className="catalog__items">
        {isFetching ? (
          <Loader />
        ) : data?.total ? (
          data?.results.map((character: ICharacter) => {
            return <HeroCard key={character.id} character={character} />;
          })
        ) : (
          <CardNotFound />
        )}
      </div>
      {!isFetching && <Pagination totalPage={totalPage} />}
    </>
  );
};

export default CardList;
