import React, { useEffect } from "react";
import Icon from "../../../icons/Icon";
import convertFromIdToOfficeName from "../../../../helpers/convertFromIdToOfficeName";
import capitaliseFirstLetter from "../../../../helpers/capitaliseFirstLetter";

export default function Office({ officeId }: { officeId: number }) {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-pink-700/50 p-1 text-center text-xs font-bold text-pink-300/75">
      <Icon icon="buildingOffice" className="h-5 w-5 fill-pink-500/50" />
      {capitaliseFirstLetter(convertFromIdToOfficeName(officeId) || "")}
    </div>
  );
}
