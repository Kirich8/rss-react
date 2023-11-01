import './cards-catalog.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import { ICharacter } from '../../utils/types/ICharacter';
import HeroCard from '../hero-card/HeroCard';
import Loader from '../loader/Loader';
import CardNotFound from '../card-not-found/CardNotFound';

const CardsCatalog = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const characters = searchValue
        ? await apiService.getCurrentCharacter(searchValue)
        : await apiService.getCharacters();

      setCharacters(characters);
      setIsLoading(false);
    };
    fetchData();
  }, [searchValue]);

  return (
    <div className="catalog">
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
