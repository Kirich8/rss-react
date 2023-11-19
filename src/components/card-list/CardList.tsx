import './card-list.css';
import { charactersApi } from '../../utils/services/charactersApi';
import { ICharacter } from '../../utils/types/ICharacter';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoadingFlagsMain } from '../../store/loadingFlagsSlice';
import { useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import CardNotFound from '../card-not-found/CardNotFound';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';
import { changeItemsPerPage } from '../../store/itemsPerPageSlice';
import {
  selectItemsPerPageCount,
  selectSearchValue,
} from '../../store/selectors';

const CardList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const currentPage = searchParams.get('page') || '1';

  const limitItems = useSelector(selectItemsPerPageCount);
  const searchValue = useSelector(selectSearchValue);

  const offset = limitItems * (+currentPage - 1);

  const { data, isFetching, isLoading, isSuccess } = searchValue
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

  const changeLoadingFlags = () => {
    dispatch(changeLoadingFlagsMain({ isLoading, isFetching, isSuccess }));
    dispatch(changeItemsPerPage({ itemsPerPage: data?.results }));
  };

  useEffect(() => {
    changeLoadingFlags();
  }, [isLoading, isFetching, isSuccess, limitItems]);

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
