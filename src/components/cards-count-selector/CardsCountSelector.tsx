import './cards-count-selector.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeItemsPerPageCount } from '../../store/itemsPerPageSlice';
import setQuery from '../../utils/helpers/set-query';
import { selectItemsPerPageCount } from '../../store/selectors';

const CardsCountSelector = () => {
  const limitItems = useSelector(selectItemsPerPageCount);
  const [selectValue, setSelectValue] = useState(limitItems);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeSelectHandler = () => {
    dispatch(changeItemsPerPageCount({ itemsPerPageCount: selectValue }));

    searchParams.set('page', '1');
    setQuery(navigate, searchParams, searchParams.size !== 0);
  };

  useEffect(() => {
    changeSelectHandler();
  }, [selectValue]);

  const variantsCardsNumber: string[] = ['12', '24', '36', '48', '60'];

  return (
    <div className="selector">
      <label className="selector__label">
        Cards per page:
        <select
          className="selector__select"
          value={selectValue}
          onChange={(event) => setSelectValue(+event.target.value)}
        >
          {variantsCardsNumber.map((number) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default CardsCountSelector;
