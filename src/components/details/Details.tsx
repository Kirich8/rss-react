import { updateSearchParams } from '@/utils/helpers/update-search-params';
import { ICharacter } from '@/utils/types/ICharacter';
import { useRouter } from 'next/router';

type DetailsProps = {
  character: ICharacter[];
};

const Details = ({ character }: DetailsProps) => {
  const router = useRouter();

  return (
    <div className="details">
      {character.map((heroInfo) => {
        return (
          <div className="details__content" key={heroInfo.id}>
            <button
              className="button"
              onClick={() => updateSearchParams(router, 'details', '')}
            >
              x
            </button>
            <p>{heroInfo.name}</p>
            <div className="details__image">
              <img
                src={`${heroInfo.thumbnail.path}.${heroInfo.thumbnail.extension}`}
                alt="Hero"
              />
            </div>
            <div className="details__description">
              {heroInfo.description.trim() === ''
                ? 'Description is missing'
                : heroInfo.description}
            </div>
            <div>
              {heroInfo.urls.map((url) => {
                return (
                  url.type === 'comiclink' && (
                    <div key={url.url}>
                      <a className="button" href={url.url} target="blank">
                        Comics with a hero
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
