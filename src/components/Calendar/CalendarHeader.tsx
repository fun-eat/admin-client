interface CalendarHeaderProps {
  monthDate: Date;
  increaseMonth: () => void;
  decreaseMonth: () => void;
}

const CalendarHeader = ({
  monthDate,
  increaseMonth,
  decreaseMonth,
}: CalendarHeaderProps) => {
  return (
    <div className='monthly-header'>
      <button
        type='button'
        aria-label='Previous Month'
        className='prev'
        onClick={decreaseMonth}
      >
        <span>{'<'}</span>
      </button>
      <span>
        {monthDate.toLocaleString('ko', {
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <button
        type='button'
        aria-label='Next Month'
        className='next'
        onClick={increaseMonth}
      >
        <span>{'>'}</span>
      </button>
    </div>
  );
};

export default CalendarHeader;
