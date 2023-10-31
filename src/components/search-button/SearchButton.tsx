type SearchButtonProps = {
  handlerButton: (character: string) => void;
  searchValue: string;
};

const SearchButton = ({ searchValue, handlerButton }: SearchButtonProps) => {
  return (
    <button className="button" onClick={() => handlerButton(searchValue)}>
      Search
    </button>
  );
};

export default SearchButton;
