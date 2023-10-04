import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

import CalendarContainer from './CalendarContainer';
import CalendarHeader from './CalendarHeader';
import { useContext } from 'react';
import { DateActionContext, DateValueContext } from './Calendar';

const CalendarBody = () => {
  const [startDate, endDate] = useContext(DateValueContext);
  const { handleDateChange } = useContext(DateActionContext);

  return (
    <DatePicker
      startDate={startDate}
      endDate={endDate}
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
