import { createContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import CalendarBody from './CalendarBody';

type DateValue = (Date | undefined)[];

interface DateAction {
  onClose: () => void;
  handleApply: () => void;
  handleDateChange: (dates: [Date, Date]) => void;
}

const INIT_DATE_VALUE = [undefined, undefined];
const INIT_DATE_ACTION = {
  onClose: () => {},
  handleApply: () => {},
  handleDateChange: () => {},
};

export const DateValueContext = createContext<DateValue>(INIT_DATE_VALUE);
export const DateActionContext = createContext<DateAction>(INIT_DATE_ACTION);

interface CalendarProps {
  dateRange: (string | undefined)[];
  applyDateRange: (dateRange: (string | undefined)[]) => void;
  onClose: () => void;
}

const Calendar = ({ dateRange, applyDateRange, onClose }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  useEffect(() => {
    const [rangeStart, rangeEnd] = dateRange;
    const rangeStartDate = rangeStart ? new Date(rangeStart) : undefined;
    const rangeEndDate = rangeEnd ? dayjs(rangeEnd).toDate() : undefined;

    setStartDate(rangeStartDate);
    setEndDate(rangeEndDate);
  }, [dateRange]);

  const handleApply = () => {
    const startDateValue = startDate
      ? dayjs(startDate)
          .hour(0)
          .minute(0)
          .second(0)
          .format('YYYY-MM-DD HH:mm:ss')
      : undefined;
    const endDateValue = endDate
      ? dayjs(endDate)
          .hour(23)
          .minute(59)
          .second(59)
          .format('YYYY-MM-DD HH:mm:ss')
      : undefined;

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
    handleApply,
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
