import './hero-card.css';
import { ICharacter } from '../../utils/types/ICharacter';
import { useNavigate, useSearchParams } from 'react-router-dom';
import setQuery from '../../utils/helpers/set-query';

type HeroCardProps = {
  character: ICharacter;
};

const HeroCard = ({ character }: HeroCardProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div
      className="herocard"
      key={character.id}
      onClick={() => {
        searchParams.set('details', `${character.id}`);
        setQuery(navigate, searchParams, searchParams.size !== 0);
      }}
    >
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
