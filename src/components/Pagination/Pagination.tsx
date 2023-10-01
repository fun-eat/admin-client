import { arrowButton, pageText, pagination } from './pagination.css';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className={pagination}>
      <button
        className={arrowButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ﹤
      </button>
      <span className={pageText}>Page {currentPage}</span>
      <button
        className={arrowButton}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ﹥
      </button>
    </div>
  );
};

export default Pagination;
