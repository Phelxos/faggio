import Link from "next/link";
import React from "react";
import displayEquivalent from "../../../../../helpers/displayEquivalent";
import useCalendar from "../../../../../stores/SCalendar";
import Rows from "./elements/Rows";

export default function PreviewMonth() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);

  return (
    <div>
      <p className="mb-3 text-4xl font-thin text-slate-400/75">
        Monatsübersicht
      </p>
      <div className="w-full shadow-md">
        <Link href="/bookings">
          <div className="flex w-full items-center justify-between rounded-t-lg bg-emerald-900/75 py-4 pl-6 pr-4">
            <span className="text-2xl font-extralight uppercase tracking-widest text-emerald-200">
              {displayEquivalent(selectedMonth, "month")}
            </span>
            <span className="rounded bg-emerald-700/50 px-4 py-2 tracking-widest text-emerald-400/75">
              {selectedYear}
            </span>
          </div>
        </Link>
        <Rows />
        <div className="h-[15px] w-full rounded-b-lg bg-emerald-900/75" />
      </div>
      <p className="mt-3 text-right text-xs font-semibold text-slate-400/25">
        Ein Punkt repräsentiert einen Tag. Je heller er leuchtet, desto mehr
        Kollegen planen, an jenem Tag ins Büro zu kommen.
      </p>
    </div>
  );
}
