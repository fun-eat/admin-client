import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';
import { REVIEW_COLUMNS, REVIEW_COLUMNS_WIDTH } from '../../constants';
import mockReviews from '../../mocks/reviews.json';
import ReviewRow from './components/ReviewRow';
import { container, section, tableTitle, title } from './reviews.css';

const Reviews = () => {
  return (
    <div className={container}>
      <h1 className={title}>리뷰</h1>
      <section className={section}>
        <h2 className={tableTitle}>
          총 {'10'.toLocaleString('ko-KR')}개의 리뷰가 검색되었습니다.
        </h2>
        <Table>
          <Colgroup widths={REVIEW_COLUMNS_WIDTH} />
          <TableHeader columns={REVIEW_COLUMNS} />
          <TableBody>
            {mockReviews.reviewResponses.map((review) => (
              <ReviewRow key={review.reviewId} review={review} />
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default Reviews;
