import { changeItemsPerPageCount } from '@/store/itemsPerPageSlice';
import { INITIAL_ITEMS_COUNT } from '@/utils/constants/constants';
import { updateSearchParams } from '@/utils/helpers/update-search-params';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const CardsCountSelector = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const limitItems = Number(router.query.limit) || INITIAL_ITEMS_COUNT;
  const variantsCardsNumber: string[] = ['12', '24', '36', '48', '60'];

  if (!variantsCardsNumber.includes(`${limitItems}`))
    variantsCardsNumber.push(`${limitItems}`);

  const changeSelectHandler = (value: string) => {
    localStorage.setItem('marvel:items-per-page', value);
    dispatch(
      changeItemsPerPageCount({
        itemsPerPageCount: +value,
      })
    );
    updateSearchParams(router, 'limit', value, true);
  };

  return (
    <div className="selector">
      <label className="selector__label">
        Cards per page:
        <select
          className="selector__select"
          value={+limitItems}
          onChange={(event) => changeSelectHandler(event.target.value)}
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
