import {
  getWeek,
  getDay,
  getDaysInMonth,
  getWeekOfMonth,
  startOfMonth,
} from "date-fns";

interface CalendarRows {
  [key: number]: Object[];
}

const mapCalendar = (
  displayedMonth: number,
  displayedYear: number
): Object[] => {
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

  let finalArr: Object[] = [];
  for (const row in calRows) {
    finalArr.push(calRows[row]);
  }
  return finalArr;
};

export default mapCalendar;
