"use client";

import useCalendar from "../../../../../../stores/SCalendar";
import Header from "./elements/Header";
import Rows from "./elements/Rows";

export default function PreviewMonth() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);

  return (
    <div className="col-span-full sm:col-start-3 sm:col-end-11 md:col-start-7 md:col-end-13 md:row-start-2 md:row-end-4 lg:col-start-8 lg:col-end-12 lg:row-start-1 lg:row-end-2">
      <p className="mb-3 text-4xl font-thin text-slate-400/75">
        Monatsübersicht
      </p>
      <div className="w-full shadow-md">
        <Header year={selectedYear} month={selectedMonth} />
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
