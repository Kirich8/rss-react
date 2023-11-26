import CardNotFound from '../card-not-found/CardNotFound';
import { ICharacter } from '../../utils/types/ICharacter';
import HeroCard from '../hero-card/HeroCard';

type CardListProps = {
  characters: ICharacter[];
};

const CardList = ({ characters }: CardListProps) => {
  return (
    <div className="catalog__items">
      {characters.length ? (
        characters.map((character: ICharacter) => {
          return <HeroCard key={character.id} character={character} />;
        })
      ) : (
        <CardNotFound />
      )}
    </div>
  );
};

export default CardList;
