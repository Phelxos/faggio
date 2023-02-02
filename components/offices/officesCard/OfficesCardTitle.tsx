import React from "react";
import {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../../../typings/types/TOfficeCity";

interface Props {
  district?: string;
  city: TOfficeCityEnglish;
  className?: string;
}

export default function OfficesCardTitle({ district, city, className }: Props) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <h2 className="text-sm font-semibold tracking-widest text-amber-900">
        {district && district[0].toLocaleUpperCase() + district?.slice(1)}
      </h2>
      <h1 className="text-4xl font-light uppercase tracking-widest text-amber-900">
        {EOfficesEnglishToGerman[city]}
      </h1>
    </div>
  );
}
