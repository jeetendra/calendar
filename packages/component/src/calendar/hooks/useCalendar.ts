// hooks/useCalendar.ts
import { useState } from "react";

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

export const useCalendar = (initialDate: Date = new Date()) => {
  const [currentDate, setCurrentDate] = useState(initialDate);

  const getCalendarDays = (): CalendarDay[] => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const startDay = startOfMonth.getDay(); // Sunday=0
    const daysInMonth = endOfMonth.getDate();

    const today = new Date();
    const days: CalendarDay[] = [];

    // Previous month filler
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        -i
      );
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const isToday = date.toDateString() === today.toDateString();
      days.push({
        date,
        isCurrentMonth: true,
        isToday,
      });
    }

    // Fill to complete weeks (42 = 6 weeks × 7 days)
    while (days.length < 42) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        days.length - startDay + 1
      );
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  return {
    currentDate,
    days: getCalendarDays(),
    goToNextMonth,
    goToPrevMonth,
  };
};
