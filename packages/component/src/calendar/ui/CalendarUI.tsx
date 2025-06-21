// components/CalendarUI.tsx
import React from "react";
import "./CalendarUI.css";
import type { CalendarDay } from "../hooks/useCalendar";

type Props = {
  currentDate: Date;
  days: CalendarDay[];
  selectedDate: Date | null;
  onPrev: () => void;
  onNext: () => void;
  onDateSelect: (date: Date) => void;
};

export const CalendarUI: React.FC<Props> = ({
  currentDate,
  days,
  selectedDate,
  onPrev,
  onNext,
  onDateSelect,
}) => {
  const isSelected = (date: Date): boolean => {
    return selectedDate?.toDateString() === date.toDateString();
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={onPrev}>&lt;</button>
        <div className="calendar-title">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={onNext}>&gt;</button>
      </div>

      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day 
              ${!day.isCurrentMonth ? "not-current-month" : ""} 
              ${day.isToday ? "today" : ""} 
              ${isSelected(day.date) ? "selected" : ""}`}
            onClick={() => onDateSelect(day.date)}
          >
            {day.date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};
