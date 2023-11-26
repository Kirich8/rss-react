import { INITIAL_PAGE } from '@/utils/constants/constants';
import { updateSearchParams } from '@/utils/helpers/update-search-params';
import { useRouter } from 'next/router';

type PaginationProps = {
  totalPage: number;
};

const isShowButton = (
  pageNumber: number,
  currentPage: number,
  totalPage: number
) =>
  pageNumber === 1 ||
  pageNumber === totalPage ||
  Math.abs(pageNumber - currentPage) <= 2;

const isShowEllipsis = (pageNumber: number, currentPage: number) => {
  switch (pageNumber) {
    case currentPage - 3:
      return true;
    case currentPage + 3:
      return true;
    default:
      return false;
  }
};

const Pagination = ({ totalPage }: PaginationProps) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || INITIAL_PAGE;

  return (
    <div className="catalog__pagination pagination">
      <div className="pagination__items">
        {[...Array(totalPage)].map((page, index) => {
          return isShowButton(index + 1, +currentPage, totalPage) ? (
            <div
              key={index}
              className={`button pagination__item ${
                +currentPage === index + 1 ? 'active' : ''
              }`}
              onClick={() => updateSearchParams(router, 'page', `${index + 1}`)}
            >
              {index + 1}
            </div>
          ) : isShowEllipsis(index + 1, +currentPage) ? (
            <p key={index}>...</p>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Pagination;
