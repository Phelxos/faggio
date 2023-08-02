import {
  getWeek,
  getDay,
  getDaysInMonth,
  getWeekOfMonth,
  startOfMonth,
} from "date-fns";
import type { DisplayedMonth } from "../app/(pages)/bookings/components/calendar/elements/Body";

interface CalendarRows {
  [key: number]: Object[];
}

const mapCalendar = (
  displayedMonth: number,
  displayedYear: number
): DisplayedMonth => {
  let calRows: CalendarRows = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

  for (
    let currentDayOfMonth = 1;
    currentDayOfMonth <=
    getDaysInMonth(new Date(displayedYear, displayedMonth));
    currentDayOfMonth = currentDayOfMonth + 1
  ) {
    const currentDate = new Date(
      displayedYear,

      displayedMonth,
      currentDayOfMonth
    );
    const currentWeekOfMonth = getWeekOfMonth(currentDate, { weekStartsOn: 1 });

    if (getDay(currentDate) === 0 || getDay(currentDate) === 6) {
      continue;
    } else if (calRows[currentWeekOfMonth].length === 0) {
      calRows[currentWeekOfMonth].push({
        calWeek: getWeek(currentDate, {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        }),
      });
      if (currentWeekOfMonth === 1 && getDay(startOfMonth(currentDate)) > 1) {
        for (let j = 1; j <= getDay(startOfMonth(currentDate)) - 1; j = j + 1) {
          calRows[1].push({
            isNoDayOfMonth: true,
          });
        }
        calRows[currentWeekOfMonth].push({
          date: currentDate,
        });
      } else {
        calRows[currentWeekOfMonth].push({
          date: currentDate,
        });
      }
    } else {
      calRows[currentWeekOfMonth].push({
        date: currentDate,
      });
    }
  }

  let finalArr = [];
  for (const row in calRows) {
    // Do not insert if the row is empty
    if (calRows[row].length === 0) continue;

    // Fill in the blank days of the last row
    if (calRows[row].length < 6) {
      for (let i = calRows[row].length; i < 6; i++) {
        calRows[row].push({
          isNoDayOfMonth: true,
        });
      }
    }

    finalArr.push(calRows[row]);
  }

  return finalArr;
};

export default mapCalendar;
