import { useContext } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

import { DateActionContext, DateValueContext } from './Calendar';
import CalendarContainer from './CalendarContainer';
import CalendarHeader from './CalendarHeader';

import './calendar.css';

const CalendarBody = () => {
  const [startDate, endDate] = useContext(DateValueContext);
  const { handleDateChange } = useContext(DateActionContext);

  return (
    <DatePicker
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      maxDate={new Date()}
      onChange={handleDateChange}
      calendarContainer={CalendarContainer}
      renderCustomHeader={CalendarHeader}
      shouldCloseOnSelect={false}
      disabledKeyboardNavigation
      selectsRange
      inline
      locale={ko}
    />
  );
};

export default CalendarBody;
