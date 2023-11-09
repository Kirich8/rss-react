import './cards-catalog.css';
import { useContext } from 'react';
import { CharactersContext } from '../../utils/context/CharactersContext';
import CardNotFound from '../card-not-found/CardNotFound';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';

type CardsCatalogProps = {
  isLoading: boolean;
};

const CardsCatalog = ({ isLoading }: CardsCatalogProps) => {
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

export default CardsCatalog;
