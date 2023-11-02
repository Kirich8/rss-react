import './details.css';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { ICharacter } from '../../utils/types/ICharacter';
import Loader from '../loader/Loader';
import setQuery from '../../utils/helpers/set-query';

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const detailsId = searchParams.get('details');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const character = await apiService.getCharacterById(detailsId || '');

      setCharacter(character.results);
      setIsLoading(false);
    };

    fetchData();
  }, [detailsId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        character.map((character) => {
          return (
            <div className="details__content" key={character.id}>
              <button
                className="button"
                onClick={() => {
                  searchParams.delete('details');
                  setQuery(navigate, searchParams, searchParams.size !== 0);
                }}
              >
                x
              </button>
              <p>{character.name}</p>
              <div className="details__image">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="Hero"
                />
              </div>
              <div className="details__description">
                {character.description.trim() === ''
                  ? 'Description is missing'
                  : character.description}
              </div>
              <div>
                {character.urls.map((url) => {
                  return url.type === 'comiclink' ? (
                    <div key={url.url}>
                      <a className="button" href={url.url} target="blank">
                        Comics with a hero
                      </a>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Details;
