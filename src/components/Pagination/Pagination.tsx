import { arrowButton, pageText, pagination } from './pagination.css';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  isLastPage: boolean;
}

const Pagination = ({
  currentPage,
  onPageChange,
  isLastPage,
}: PaginationProps) => {
  return (
    <div className={pagination}>
      <button
        className={arrowButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ﹤
      </button>
      <span className={pageText}>{currentPage}</span>
      <button
        className={arrowButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        ﹥
      </button>
    </div>
  );
};

export default Pagination;
