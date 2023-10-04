import { createContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import CalendarBody from './CalendarBody';

type DateValue = (Date | null)[];

interface DateAction {
  onClose: () => void;
  handleApplyClick: () => void;
  handleDateChange: (dates: [Date, Date]) => void;
}

const INIT_DATE_VALUE = [null, null];
const INIT_DATE_ACTION = {
  onClose: () => {},
  handleApplyClick: () => {},
  handleDateChange: () => {},
};

export const DateValueContext = createContext<DateValue>(INIT_DATE_VALUE);
export const DateActionContext = createContext<DateAction>(INIT_DATE_ACTION);

interface CalendarProps {
  dateRange: (string | null)[];
  applyDateRange: (dateRange: (string | null)[]) => void;
  onClose: () => void;
}

const Calendar = ({ dateRange, applyDateRange, onClose }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const [rangeStart, rangeEnd] = dateRange;
    const rangeStartDate = rangeStart ? new Date(rangeStart) : null;
    const rangeEndDate = rangeEnd ? dayjs(rangeEnd).toDate() : null;

    setStartDate(rangeStartDate);
    setEndDate(rangeEndDate);
  }, [dateRange]);

  const handleApplyClick = () => {
    const startDateValue = startDate
      ? dayjs(startDate)
          .hour(0)
          .minute(0)
          .second(0)
          .format('YYYY-MM-DD HH:mm:ss')
      : null;
    const endDateValue = endDate
      ? dayjs(endDate)
          .hour(23)
          .minute(59)
          .second(59)
          .format('YYYY-MM-DD HH:mm:ss')
      : null;

    applyDateRange([startDateValue, endDateValue]);
    onClose();
  };

  const handleDateChange = (dates: DateValue) => {
    const [startDate, endDate] = dates;

    setStartDate(startDate);
    setEndDate(endDate);
  };

  const action = {
    onClose,
    handleApplyClick,
    handleDateChange,
  };

  return (
    <DateActionContext.Provider value={action}>
      <DateValueContext.Provider value={[startDate, endDate]}>
        <CalendarBody />
      </DateValueContext.Provider>
    </DateActionContext.Provider>
  );
};

export default Calendar;
