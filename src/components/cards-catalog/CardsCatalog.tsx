import './cards-catalog.css';
import HeroCard from '../hero-card/HeroCard';
import { ICharacter } from '../../utils/types/ICharacter';

type CardsCatalogProps = {
  characters: ICharacter[];
};

const CardsCatalog = ({ characters }: CardsCatalogProps) => {
  return (
    <div className="catalog">
      {characters.map((character) => {
        return <HeroCard key={character.id} character={character} />;
      })}
    </div>
  );
};

export default CardsCatalog;
