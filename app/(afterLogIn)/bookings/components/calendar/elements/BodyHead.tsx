import { FC } from "react";
import useCalendar from "../../../../../../stores/SCalendar";

const BodyHead: FC = () => {
  const displayedWeekdays = useCalendar((s) => s.displayedWeekdays);

  return (
    <thead className="bg-slate-800 font-mono">
      <tr>
        {displayedWeekdays.map((weekday: string, i: number) => {
          if (weekday === "Sa" || weekday === "So") {
            return null;
          } else if (weekday === "KW") {
            return (
              <th
                key={i}
                className="border-r-4 border-slate-900 p-2 text-center text-sm text-slate-500 opacity-75"
              >
                {weekday}
              </th>
            );
          } else {
            return (
              <th key={i} className="p-2 text-center font-bold text-slate-400">
                {weekday}
              </th>
            );
          }
        })}
      </tr>
    </thead>
  );
};

export default BodyHead;
