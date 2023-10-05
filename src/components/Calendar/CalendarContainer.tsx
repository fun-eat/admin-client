import { PropsWithChildren, useContext } from 'react';
import { CalendarContainer as Container } from 'react-datepicker';

import { DateActionContext, DateValueContext } from './Calendar';

import { convertToDateWithoutTime } from '../../utils';

const CalendarContainer = ({ children }: PropsWithChildren) => {
  const [startDate, endDate] = useContext(DateValueContext);
  const { onClose, handleApply } = useContext(DateActionContext);

  return (
    <Container className='calendar'>
      <div className='calendar-header'>
        {startDate ? convertToDateWithoutTime(startDate) : '시작 날짜'} ~{' '}
        {endDate ? convertToDateWithoutTime(endDate) : '종료 날짜'}
      </div>
      <div className='calendar-main'>{children}</div>
      <div className='calendar-footer'>
        <button type='button' onClick={onClose}>
          닫기
        </button>
        <button type='button' className='apply' onClick={handleApply}>
          적용
        </button>
      </div>
    </Container>
  );
};

export default CalendarContainer;
