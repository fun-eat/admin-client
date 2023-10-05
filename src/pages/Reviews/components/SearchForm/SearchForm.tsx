import { FormEventHandler, useState } from 'react';
import Calendar from '../../../../components/Calendar';
import Input from '../../../../components/Input';
import { useDisclosure } from '../../../../hooks';
import { convertToDateWithoutTime } from '../../../../utils';
import {
  useReviewSearchQueryActionContext,
  useReviewSearchQueryValueContext,
} from '../../hooks';

import {
  dateButton,
  dateText,
  searchForm,
  submitButton,
  wrapper,
} from './searchForm.css';

const SearchForm = () => {
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  const reviewSearchQuery = useReviewSearchQueryValueContext();
  const handleValueChange = useReviewSearchQueryActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const applyDateRange = (dateRange: (string | undefined)[]) => {
    const [currentFrom, currentTo] = dateRange;

    setFrom(currentFrom);
    setTo(currentTo);
  };

  const handleReviewSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleValueChange({
      id: null,
      name: reviewSearchQuery.name,
      from,
      to,
      totalElements: null,
      prePage: 0,
    });
  };

  return (
    <>
      <form className={searchForm} onSubmit={handleReviewSearch}>
        <Input label='상품명' name='name' />
        <div className={wrapper}>
          <span>날짜</span>
          <button type='button' className={dateButton} onClick={onOpen}>
            <span className={dateText}>
              {from ? convertToDateWithoutTime(from) : '시작 날짜'}
            </span>
            <span>~</span>
            <span className={dateText}>
              {to ? convertToDateWithoutTime(to) : '종료 날짜'}
            </span>
          </button>
        </div>
        <button className={submitButton}>검색</button>
      </form>
      {isOpen && (
        <Calendar
          dateRange={[from, to]}
          applyDateRange={applyDateRange}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default SearchForm;
