import ReviewRow from './components/ReviewRow';
import {
  useReviewSearchQueryActionContext,
  useReviewSearchQueryValueContext,
} from './hooks';

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
import Calendar from '../../components/Calendar';
import { useDisclosure } from '../../hooks';
import { convertToDateWithoutTime } from '../../utils';

import mockReviewResponses from '../../mocks/reviews.json';

const Reviews = () => {
  const reviewSearchQuery = useReviewSearchQueryValueContext();
  //const { data } = useReviewQuery(reviewSearchQuery);

  const currentPage = usePageValueContext();
  const { onPageChange } = usePageActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleValueChange = useReviewSearchQueryActionContext();

  //if (!data) {
  //  return null;
  //}

  //const { lastPage, totalElements, reviewResponses } = data;
  const dateRange = [reviewSearchQuery.from, reviewSearchQuery.to];

  const applyDateRange = (dateRange: (string | undefined)[]) => {
    const [from, to] = dateRange;

    handleValueChange({ ...reviewSearchQuery, from, to });
  };

  return (
    <div className={container}>
      <h1 className={title}>리뷰</h1>
      <section>
        <button type='button' className='date-button' onClick={onOpen}>
          {dateRange[0] ? convertToDateWithoutTime(dateRange[0]) : '시작 날짜'}{' '}
          ~{' '}
          {dateRange[1] ? convertToDateWithoutTime(dateRange[1]) : '종료 날짜'}
        </button>
        {isOpen && (
          <Calendar
            dateRange={dateRange}
            applyDateRange={applyDateRange}
            onClose={onClose}
          />
        )}
      </section>
      <section className={section}>
        <h2 className={tableTitle}>
          총 {'1000'.toLocaleString('ko-KR')}개의 리뷰가 검색되었습니다.
        </h2>
        <Table>
          <Colgroup widths={REVIEW_COLUMNS_WIDTH} />
          <TableHeader columns={REVIEW_COLUMNS} />
          <TableBody>
            {mockReviewResponses.reviewResponses.map((review) => (
              <ReviewRow key={review.id} review={review} />
            ))}
          </TableBody>
        </Table>
      </section>
      <div className={section}>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange(
            mockReviewResponses.reviewResponses,
            10,
            handleValueChange
          )}
          isLastPage={true}
        />
      </div>
    </div>
  );
};

export default Reviews;
