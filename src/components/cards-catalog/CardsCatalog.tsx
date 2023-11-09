import './cards-catalog.css';
import CardNotFound from '../card-not-found/CardNotFound';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';
import { ICharacter } from '../../utils/types/ICharacter';

type CardsCatalogProps = {
  isLoading: boolean;
  characters: ICharacter[];
};

const CardsCatalog = ({ isLoading, characters }: CardsCatalogProps) => {
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
