import './hero-card.css';
import { ICharacter } from '../../utils/types/ICharacter';

type HeroCardProps = {
  character: ICharacter;
};

const HeroCard = ({ character }: HeroCardProps) => {
  return (
    <div className="herocard" key={character.id}>
      <div className="herocard__image">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="Hero"
        />
      </div>
      <div className="herocard__info info">
        <p className="info__name">{character.name}</p>
      </div>
    </div>
  );
};

export default HeroCard;
