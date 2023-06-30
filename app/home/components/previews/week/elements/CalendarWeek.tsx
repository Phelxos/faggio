export default function CalendarWeek({
  isShowingNextWeekBookings,
  calWeek,
}: {
  isShowingNextWeekBookings: boolean;
  calWeek: number;
}) {
  return (
    <div className="flex h-full w-1/5 flex-col items-center justify-between border-r-2 border-emerald-300/50 p-3">
      <span className="self-start text-2xl font-thin text-emerald-300/60">
        KW
      </span>
      <span className="self-end text-xl font-bold text-emerald-300/50">
        {isShowingNextWeekBookings ? calWeek + 1 : calWeek}
      </span>
    </div>
  );
}
