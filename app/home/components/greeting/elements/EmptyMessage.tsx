import Link from "next/link";
import { FC } from "react";

const EmptyMessage: FC = () => {
  return (
    <>
      <p className="text-sky-500/75">
        Bislang planst du <strong>nicht</strong>, ins Büro zu kommen.
      </p>
      <Link
        href="/bookings"
        className="self-end rounded-xl border-2 border-sky-800/75 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-700 to-sky-400 px-3 py-2 text-sky-900 shadow-lg"
      >
        <button className="font-mono text-xs uppercase tracking-wider">
          Bürotage buchen
        </button>
      </Link>
    </>
  );
};

export default EmptyMessage;
