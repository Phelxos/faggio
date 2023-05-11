import React from "react";
import Icon from "../../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faChair } from "@fortawesome/free-solid-svg-icons";

interface Props {
  headcount: number;
  workstations: number;
  areaInSquareMeters: number;
  areDogsAllowed: boolean;
  className?: string;
}

export default function OfficesCardQuickies({
  headcount,
  workstations,
  areaInSquareMeters,
  areDogsAllowed,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-between text-sm ${className} gap-3`}
    >
      <div className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-500/25 bg-amber-800/50 p-2 font-bold text-amber-500">
        <Icon icon="userGroup" className="h-6 w-6 opacity-50" />
        {headcount}
      </div>
      <div className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-500/25 bg-amber-800/50 p-2 font-bold text-amber-500">
        <FontAwesomeIcon icon={faChair} className="h-5 w-5 opacity-50" />
        {workstations}
      </div>
      <div className="flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-amber-500/25 bg-amber-800/50 p-2 text-xs font-bold text-amber-500">
        {areaInSquareMeters}
        <div className="ml-1 opacity-50">
          m<sup>2</sup>
        </div>
      </div>
      <div className="flex min-h-[48px] w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-amber-500/25 bg-amber-800/50 p-2 font-bold text-amber-500">
        {areDogsAllowed ? (
          <>
            <FontAwesomeIcon icon={faPaw} className="mr-1 h-5 w-5" />
          </>
        ) : (
          <>
            <Icon icon="noSymbol" className="h-8 w-8" />
            <FontAwesomeIcon
              icon={faPaw}
              className="absolute h-4 w-4 opacity-75"
            />
          </>
        )}
      </div>
    </div>
  );
}
