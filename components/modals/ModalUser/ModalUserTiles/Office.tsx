import React from "react";
import Icon from "../../../icons/Icon";
import capitaliseFirstLetter from "../../../../helpers/capitaliseFirstLetter";
import {
  TOfficeCityEnglish,
  EOfficesEnglishToGerman,
} from "../../../../typings/types/TOfficeCity";

export default function Office({
  office = "dortmund",
}: {
  office: TOfficeCityEnglish | undefined;
}) {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-pink-700/50 p-1 text-center text-xs font-bold text-pink-300/75">
      <Icon icon="buildingOffice" className="h-5 w-5 fill-pink-500/50" />
      {capitaliseFirstLetter(EOfficesEnglishToGerman[office] || "")}
    </div>
  );
}
