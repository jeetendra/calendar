import React from "react";
import { useCalendar } from "./hooks/useCalendar";
import { CalendarUI } from "./ui/CalendarUI";

const Calendar: React.FC = () => {
  const { currentDate, days, goToNextMonth, goToPrevMonth } = useCalendar();

  return (
    <CalendarUI
      currentDate={currentDate}
      days={days}
      onNext={goToNextMonth}
      onPrev={goToPrevMonth}
    />
  );
};

export default Calendar;
