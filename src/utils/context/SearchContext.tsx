import { PropsWithChildren, createContext, useState } from 'react';

type SearchContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  setSearchValue: useState,
});

const SearchContextProvider = (props: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('input_value') || ''
  );

  const value = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
