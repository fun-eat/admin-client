import ReviewRow from './components/ReviewRow';
import { useReviewSearchQueryActionContext } from './hooks';

import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';
import Pagination from '../../components/Pagination';
import {
  usePageActionContext,
  usePageValueContext,
} from '../../hooks/contexts';
import { REVIEW_COLUMNS, REVIEW_COLUMNS_WIDTH } from '../../constants';
import { useReviewQuery } from '../../hooks/queries';

import { container, section, tableTitle, title } from './reviews.css';

const Reviews = () => {
  const { data } = useReviewQuery();

  const currentPage = usePageValueContext();
  const { onPageChange } = usePageActionContext();

  const handleValueChange = useReviewSearchQueryActionContext();

  if (!data) {
    return null;
  }

  const { lastPage, totalElements, reviewResponses } = data;

  return (
    <div className={container}>
      <h1 className={title}>리뷰</h1>
      <section className={section}>
        <h2 className={tableTitle}>
          총 {totalElements.toLocaleString('ko-KR')}개의 리뷰가 검색되었습니다.
        </h2>
        <Table>
          <Colgroup widths={REVIEW_COLUMNS_WIDTH} />
          <TableHeader columns={REVIEW_COLUMNS} />
          <TableBody>
            {reviewResponses.map((review) => (
              <ReviewRow key={review.reviewId} review={review} />
            ))}
          </TableBody>
        </Table>
      </section>
      <div className={section}>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange(
            reviewResponses,
            totalElements,
            handleValueChange,
            'reviewId'
          )}
          isLastPage={lastPage}
        />
      </div>
    </div>
  );
};

export default Reviews;
