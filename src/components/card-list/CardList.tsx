import './card-list.css';
import { useContext } from 'react';
import { CharactersContext } from '../../utils/context/CharactersContext';
import CardNotFound from '../card-not-found/CardNotFound';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';

type CardListProps = {
  isLoading: boolean;
};

const CardList = ({ isLoading }: CardListProps) => {
  const { characters } = useContext(CharactersContext);

  return (
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
  );
};

export default CardList;
