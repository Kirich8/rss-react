import { updateSearchParams } from '@/utils/helpers/update-search-params';
import { ICharacter } from '../../utils/types/ICharacter';
import { useRouter } from 'next/router';
import Image from 'next/image';

type HeroCardProps = {
  character: ICharacter;
};

const HeroCard = ({ character }: HeroCardProps) => {
  const router = useRouter();

  return (
    <div
      className="herocard"
      key={character.id}
      onClick={() => updateSearchParams(router, 'details', `${character.id}`)}
    >
      <div className="herocard__image">
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="Hero"
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="herocard__info info">
        <p className="info__name">{character.name}</p>
      </div>
    </div>
  );
};

export default HeroCard;
