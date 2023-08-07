"use client";

import { FC, useRef } from "react";
import SearchAndSelect from "../../../../../../components/SearchAndSelect";
import Icon from "../../../../../../components/icons/Icon";
import displayEquivalent from "../../../../../../helpers/displayEquivalent/displayEquivalent";
import useTheme from "../../../../../../hooks/useTheme";
import useCalendar from "../../../../../../stores/SCalendar";

const Header: FC = () => {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const displayedYears = useCalendar((s) => s.displayedYears);
  const theme = useTheme();
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const handleClick = {
    chevronLeft: {
      month: () => {
        if (selectedMonth === 0) {
          incrementSelectedYear(-1);
          setSelectedMonth(11);
          return;
        } else {
          incrementSelectedMonth(-1);
        }
      },
      year: () => {
        incrementSelectedYear(-1);
      },
    },
    chevronRight: {
      month: () => {
        if (selectedMonth === 11) {
          incrementSelectedYear(1);
          setSelectedMonth(0);
          return;
        } else {
          incrementSelectedMonth(1);
        }
      },
      year: () => {
        incrementSelectedYear(1);
      },
    },
  };

  return (
    <section className="flex w-full items-center justify-around gap-4 rounded-t-lg bg-emerald-900 p-6">
      <div ref={monthRef} className="flex w-1/2 items-center justify-center">
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.month}
        />
        <SearchAndSelect
          value={displayEquivalent(selectedMonth, "month")}
          setValue={(val) =>
            setSelectedMonth(displayEquivalent(val, "month") as number)
          }
          listOfValues={displayedMonths}
          theme={theme}
        />
        <Icon
          icon="chevronRight"
          onClick={handleClick.chevronRight.month}
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
        />
      </div>
      <div
        ref={yearRef}
        className="flex w-1/2 items-center justify-center lg:m-0"
      >
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.year}
        />
        <SearchAndSelect
          value={selectedYear}
          setValue={setSelectedYear}
          listOfValues={displayedYears}
          theme={theme}
        />
        <Icon
          icon="chevronRight"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronRight.year}
        />
      </div>
    </section>
  );
};

export default Header;
