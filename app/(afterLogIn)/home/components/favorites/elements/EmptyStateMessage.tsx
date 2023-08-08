import Link from "next/link";
import { FC } from "react";
import Icon from "../../../../../components/icons/Icon";

interface Props {
  onButtonClick: () => void;
}

const EmptyStateMessage: FC<Props> = ({ onButtonClick }) => {
  return (
    <div className="flex w-full grow flex-col gap-10">
      <span className="flex items-center text-xs text-pink-400/50">
        <Icon icon="informationCircle" className="mr-2 h-8 w-8 opacity-50" />
        Du hast noch <span className="mx-1 font-bold">
          keine Favoriten
        </span>{" "}
        gewählt.
      </span>
      <Link
        href="/teams"
        className="self-end rounded-xl border-2 border-pink-800/75 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-700 to-pink-400 px-3 py-2 text-pink-900 shadow-lg"
      >
        <button
          className="font-mono text-xs uppercase tracking-wider"
          onClick={onButtonClick}
        >
          Kollegen favorisieren
        </button>
      </Link>
    </div>
  );
};

export default EmptyStateMessage;
