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
    <div className={`${className}`}>
      <h2 className="text-xs font-bold tracking-widest text-amber-900">
        {district}
      </h2>
      <h1 className="text-4xl font-light uppercase tracking-widest text-amber-400">
        {EOfficesEnglishToGerman[city]}
      </h1>
    </div>
  );
}
