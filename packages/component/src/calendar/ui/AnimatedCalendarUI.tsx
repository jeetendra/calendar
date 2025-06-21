// components/AnimatedCalendarUI.tsx
import React, { useState } from "react";
import "./AnimatedCalendarUI.css";
import type { CalendarDay } from "../hooks/useCalendar";

type Props = {
  currentDate: Date;
  days: CalendarDay[];
  selectedDate: Date | null;
  onPrev: () => void;
  onNext: () => void;
  onDateSelect: (date: Date) => void;
};

export const AnimatedCalendarUI: React.FC<Props> = ({
  currentDate,
  days,
  selectedDate,
  onPrev,
  onNext,
  onDateSelect,
}) => {
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);

  const handlePrev = () => {
    setAnimationDirection("left");
    setTimeout(() => {
      onPrev();
      setAnimationDirection(null);
    }, 300);
  };

  const handleNext = () => {
    setAnimationDirection("right");
    setTimeout(() => {
      onNext();
      setAnimationDirection(null);
    }, 300);
  };

  const isSelected = (date: Date) =>
    selectedDate?.toDateString() === date.toDateString();

  return (
    <div className="calendar animated">
      <div className="calendar-header">
        <button onClick={handlePrev}>&lt;</button>
        <div className="calendar-title">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={handleNext}>&gt;</button>
      </div>

      <div className="calendar-weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className={`calendar-grid slide-${animationDirection || "none"}`}>
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
