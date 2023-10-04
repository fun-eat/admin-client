import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';
import { REVIEW_COLUMNS, REVIEW_COLUMNS_WIDTH } from '../../constants';
import ReviewRow from './components/ReviewRow';

import { container, section, tableTitle, title } from './reviews.css';

import { useReviewQuery } from '../../hooks/queries';

const Reviews = () => {
  const { data } = useReviewQuery();

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
    </div>
  );
};

export default Reviews;
