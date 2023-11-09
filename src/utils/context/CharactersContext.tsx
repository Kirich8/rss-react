import { PropsWithChildren, createContext, useState } from 'react';
import { ICharacter } from '../types/ICharacter';

type CharactersContextType = {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>;
};

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
  setCharacters: useState,
});

const CharactersContextProvider = (props: PropsWithChildren) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const value = {
    characters,
    setCharacters,
  };

  return (
    <CharactersContext.Provider value={value}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
