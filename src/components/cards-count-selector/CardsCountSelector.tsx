import { useNavigate, useSearchParams } from 'react-router-dom';
import './cards-count-selector.css';
import setQuery from '../../utils/helpers/set-query';

type CardsCountSelectorProps = {
  limitItems: string;
  setLimitItems: React.Dispatch<React.SetStateAction<string>>;
};

const CardsCountSelector = ({
  limitItems,
  setLimitItems,
}: CardsCountSelectorProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className="selector">
      <label className="selector__label">
        Cards per page:
        <select
          className="selector__select"
          value={limitItems}
          onChange={(event) => {
            setLimitItems(event.target.value);
            searchParams.set('page', '1');
            setQuery(navigate, searchParams, searchParams.size !== 0);
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
