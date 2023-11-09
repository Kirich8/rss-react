import './pagination.css';

type PaginationProps = {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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

const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className="catalog__pagination pagination">
      <div className="pagination__items">
        {[...Array(totalPage)].map((page, index) => {
          return isShowButton(index + 1, currentPage, totalPage) ? (
            <div
              key={index}
              className={
                currentPage === index + 1
                  ? 'button pagination__item active'
                  : 'button pagination__item'
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </div>
          ) : isShowEllipsis(index + 1, currentPage) ? (
            <p key={index}>...</p>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Pagination;
