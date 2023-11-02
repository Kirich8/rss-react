import './cards-count-selector.css';

type CardsCountSelectorPropsType = {
  limitItems: string;
  setLimitItems: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const CardsCountSelector = ({
  limitItems,
  setLimitItems,
  setCurrentPage,
}: CardsCountSelectorPropsType) => {
  return (
    <div className="selector">
      <label className="selector__label">
        Cards per page:
        <select
          className="selector__select"
          value={limitItems}
          onChange={(event) => {
            setLimitItems(event.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
        </select>
      </label>
    </div>
  );
};

export default CardsCountSelector;
