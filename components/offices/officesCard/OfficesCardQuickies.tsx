import React from "react";
import Icon from "../../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faChair } from "@fortawesome/free-solid-svg-icons";

interface Props {
  headcount: number;
  workstations: number;
  areaInSquareMetres: number;
  areDogsAllowed: boolean;
  className?: string;
}

export default function OfficesCardQuickies({
  headcount,
  workstations,
  areaInSquareMetres,
  areDogsAllowed,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-around text-sm ${className}`}
    >
      <span className="flex items-center border-amber-900 font-bold text-amber-500">
        <Icon icon="userGroup" className="mr-1 h-6 w-6 opacity-50" />
        {headcount}
      </span>
      <span className="flex items-center font-bold text-amber-500">
        <FontAwesomeIcon icon={faChair} className="mr-1 h-5 w-5" />
        {workstations}
      </span>
      <span className="flex items-center font-bold text-amber-500">
        {areaInSquareMetres}
        <span className="ml-1 text-xs opacity-50">
          m<sup>2</sup>
        </span>
      </span>
      <span className="relative flex items-center justify-center text-amber-500">
        {areDogsAllowed ? (
          <>
            <FontAwesomeIcon icon={faPaw} className="mr-1 h-5 w-5" />
            <span className="text-xs opacity-75">erlaubt</span>
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
      </span>
    </div>
  );
}
