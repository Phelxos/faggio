import React from "react";
import useCalendar from "../../stores/SCalendar";

export default function CalFooter() {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);

  return (
    <div className="flex w-full items-center justify-center rounded-b-lg bg-emerald-900 py-4">
      <button
        className="w-1/2 rounded-lg bg-emerald-600 uppercase tracking-widest text-emerald-100"
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
