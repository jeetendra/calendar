import React from "react";
import { useCalendar } from "./hooks/useCalendar";
import { CalendarUI } from "./ui/CalendarUI";
import { AnimatedCalendarUI } from "./ui/AnimatedCalendarUI";
type Props = { onDateSelect: (date: Date) => {} };

const Calendar: React.FC<Props> = ({ onDateSelect }) => {
  const {
    currentDate,
    days,
    selectedDate,
    setSelectedDate,
    goToNextMonth,
    goToPrevMonth,
  } = useCalendar();

  const handledateSelection = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <CalendarUI
      currentDate={currentDate}
      days={days}
      selectedDate={selectedDate}
      onNext={goToNextMonth}
      onPrev={goToPrevMonth}
      onDateSelect={handledateSelection}
    />
  );
};

export default Calendar;

const Calendar2: React.FC = () => {
  const {
    currentDate,
    days,
    selectedDate,
    setSelectedDate,
    goToNextMonth,
    goToPrevMonth,
  } = useCalendar();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  return (
    <AnimatedCalendarUI
      currentDate={currentDate}
      days={days}
      selectedDate={selectedDate}
      onNext={goToNextMonth}
      onPrev={goToPrevMonth}
      onDateSelect={handleDateSelect}
    />
  );
};

export { Calendar2 };
