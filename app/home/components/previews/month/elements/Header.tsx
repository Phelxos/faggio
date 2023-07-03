import { FC } from "react";
import Link from "next/link";
import displayEquivalent from "../../../../../../helpers/displayEquivalent";

interface Props {
  year: number;
  month: number;
}

const Header: FC<Props> = ({ year, month }) => {
  return (
    <Link href="/bookings">
      <div className="flex w-full items-center justify-between rounded-t-lg bg-emerald-900/75 py-4 pl-6 pr-4">
        <span className="text-2xl font-extralight uppercase tracking-widest text-emerald-200">
          {displayEquivalent(month, "month")}
        </span>
        <span className="rounded bg-emerald-700/50 px-4 py-2 tracking-widest text-emerald-400/75">
          {year}
        </span>
      </div>
    </Link>
  );
};

export default Header;
