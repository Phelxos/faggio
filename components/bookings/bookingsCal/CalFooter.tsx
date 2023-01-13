import React from "react";
import useCalendar from "../../../stores/SCalendar";

export default function CalFooter() {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);

  return (
    <div className="flex w-full items-center justify-center rounded-b-lg bg-emerald-900 py-6">
      <button
        className="w-1/2 rounded border-2 border-emerald-400 bg-emerald-600 p-2 uppercase tracking-widest text-emerald-200 hover:bg-emerald-400 hover:text-emerald-600"
        onClick={() => {
          setSelectedMonth(currentMonth);
          setSelectedYear(currentYear);
        }}
      >
        heute
      </button>
    </div>
  );
}
