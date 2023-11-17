import './cards-count-selector.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { useEffect, useState } from 'react';
import { changeItemsPerPageCount } from '../../store/itemsPerPageSlice';
import setQuery from '../../utils/helpers/set-query';

const CardsCountSelector = () => {
  const limitItems = useSelector(
    (state: AppState) => state.itemsPerPage.itemsPerPageCount
  );

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

  return (
    <div className="selector">
      <label className="selector__label">
        Cards per page:
        <select
          className="selector__select"
          value={selectValue}
          onChange={(event) => setSelectValue(+event.target.value)}
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
