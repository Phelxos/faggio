import React from "react";
import useCalendar from "../../stores/SCalendar";

export default function CalFooter() {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);

  return (
    <div>
      <button
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
