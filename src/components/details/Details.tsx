import './details.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { charactersApi } from '../../utils/services/charactersApi';
import { useDispatch } from 'react-redux';
import { changeLoadingFlagsDetails } from '../../store/loadingFlagsSlice';
import { useEffect } from 'react';
import Loader from '../loader/Loader';
import setQuery from '../../utils/helpers/set-query';

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailsId = searchParams.get('details') as string;

  const { data, isFetching, isLoading, isSuccess } =
    charactersApi.useGetCharacterByIdQuery({
      id: detailsId,
    });

  const changeLoadingFlags = () => {
    dispatch(changeLoadingFlagsDetails({ isLoading, isFetching, isSuccess }));
  };

  useEffect(() => {
    changeLoadingFlags();
  }, [isLoading, isFetching, isSuccess]);

  return (
    <div className="details">
      {isFetching ? (
        <Loader />
      ) : (
        data?.results.map((character) => {
          return (
            <div className="details__content" key={character.id}>
              <button
                className="button"
                data-testid="close-button"
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
        })
      )}
    </div>
  );
};

export default Details;
