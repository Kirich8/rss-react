type SearchButtonProps = {
  clickButtonHandler: () => void;
};

const SearchButton = ({ clickButtonHandler }: SearchButtonProps) => {
  return (
    <button className="button" onClick={clickButtonHandler}>
      Search
    </button>
  );
};

export default SearchButton;
