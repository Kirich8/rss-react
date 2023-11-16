import { useNavigate, useSearchParams } from 'react-router-dom';
import './pagination.css';
import setQuery from '../../utils/helpers/set-query';

type PaginationProps = {
  totalPage: number;
};

const isShowButton = (
  pageNumber: number,
  currentPage: number,
  totalPage: number
) => {
  switch (pageNumber) {
    case 1:
      return true;
    case currentPage:
      return true;
    case currentPage + 1:
      return true;
    case currentPage - 1:
      return true;
    case currentPage + 2:
      return true;
    case currentPage - 2:
      return true;
    case totalPage:
      return true;
    default:
      return false;
  }
};

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = searchParams.get('page') || '1';

  return (
    <div className="catalog__pagination pagination">
      <div className="pagination__items">
        {[...Array(totalPage)].map((page, index) => {
          return isShowButton(index + 1, +currentPage, totalPage) ? (
            <div
              key={index}
              className={
                +currentPage === index + 1
                  ? 'button pagination__item active'
                  : 'button pagination__item'
              }
              onClick={() => {
                searchParams.set('page', `${index + 1}`);
                setQuery(navigate, searchParams, searchParams.size !== 0);
              }}
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
