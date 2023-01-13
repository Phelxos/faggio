import { useState, useEffect } from "react";
import useCalendar from "../../../stores/SCalendar";
import mapCalendar from "../../../helpers/mapCalendar";
import { getDate } from "date-fns";

export default function CalBody() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const displayedWeekdays = useCalendar((s) => s.displayedWeekdays);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });

  useEffect(() => {
    setDisplayedMonth(mapCalendar(selectedMonth, selectedYear));
  }, [selectedYear, selectedMonth, displayedWeekdays]);

  return (
    <table className="w-full grow table-fixed">
      <thead className="bg-emerald-700">
        <tr>
          {displayedWeekdays.map((weekday: string, i: number) => {
            if (weekday === "Sa" || weekday === "So") {
              return null;
            } else if (weekday === "KW") {
              return (
                <th
                  key={i}
                  className="border-r-4 border-emerald-900 p-2 text-center font-mono text-sm font-bold text-emerald-500 opacity-75"
                >
                  {weekday}
                </th>
              );
            } else {
              return (
                <th
                  key={i}
                  className="p-2 text-center font-bold text-emerald-400"
                >
                  {weekday}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {displayedMonth.map((week: any[], i: number) => {
          return (
            <tr
              key={i}
              className={`${
                i % 2 === 0
                  ? "bg-emerald-500 text-emerald-700"
                  : "bg-emerald-600 text-emerald-400"
              }`}
            >
              {week.map((weekday: any, i: number) => {
                if (weekday.isNoDayOfMonth) {
                  return <td key={i}></td>;
                } else if (weekday.calWeek) {
                  return (
                    <td
                      key={i}
                      className="border-r-4 border-emerald-900 p-2 text-center font-mono text-sm font-bold opacity-50 hover:cursor-pointer hover:bg-emerald-200"
                    >
                      {weekday.calWeek}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={i}
                      className={`m-2 cursor-pointer p-2 text-center text-3xl font-light hover:rounded-lg hover:bg-emerald-200`}
                    >
                      {getDate(weekday.date)}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
