import {
  startOfMonth,
  endOfMonth,
  isWeekend,
  getWeek,
  nextMonday,
  eachDayOfInterval,
} from "date-fns";

export function getDisplayedCalWeeksInSelectedMonth(
  month?: number,
  year?: number
): number[] {
  let today;
  if (arguments.length) {
    today = new Date(year!, month!);
  } else {
    today = new Date();
  }
  let firstDay = startOfMonth(today);
  if (isWeekend(firstDay)) {
    firstDay = nextMonday(firstDay);
  }
  const lastDay = endOfMonth(today);
  const firstWeek = getWeek(firstDay, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
  });
  const lastWeek = getWeek(lastDay, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
  });
  return Array.from(
    { length: lastWeek - firstWeek + 1 },
    (_, i) => firstWeek + i
  );
}

export function getLastDayOfCurrentYear(): Date {
  const currentYear = new Date().getFullYear();
  return new Date(currentYear, 11, 31);
}

export function getFirstCalWeekOfSelectedMonth(
  month: number,
  year: number
): number {
  const firstDayOfMonth = startOfMonth(new Date(year, month));
  if (isWeekend(firstDayOfMonth)) {
    return getWeek(nextMonday(firstDayOfMonth), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    });
  } else {
    return getWeek(firstDayOfMonth, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    });
  }
}

export function getAllWorkingDaysOfYearWithTheirCorrespondingCalWeek(
  year: number
) {
  const allWorkingDaysOfYear: Date[] = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  });
  const allWorkingDaysOfYearWithTheirCorrespondingCalWeek: (
    | {
        date: Date;
        calWeek: number;
      }
    | undefined
  )[] = allWorkingDaysOfYear
    .map((date) => {
      if (!isWeekend(date)) {
        const calWeek = getWeek(date, {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        });
        return {
          date,
          calWeek,
        };
      }
    })
    .filter((date) => date);
  return allWorkingDaysOfYearWithTheirCorrespondingCalWeek;
}

export function getWorkingDaysOfSelectedCalWeek(
  workingDays: ({ date: Date; calWeek: number } | undefined)[],
  calWeekFilter: number
): Date[] {
  const workingDaysOfSelectedCalWeek = workingDays
    .filter(({ calWeek }: any) => calWeek === calWeekFilter)
    .map(({ date }: any) => date);
  return workingDaysOfSelectedCalWeek;
}
