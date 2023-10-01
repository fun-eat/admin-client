import { arrowButton, pageText, pagination } from './pagination.css';

interface PaginationProps {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <div className={pagination}>
      <button
        className={arrowButton}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        ﹤
      </button>
      <span className={pageText}>{currentPage}</span>
      <button className={arrowButton} onClick={handleNextPage}>
        ﹥
      </button>
    </div>
  );
};

export default Pagination;
