import React from "react";
import useOffice from "../../../stores/SOffices";
import Icon from "../../icons/Icon";
import useTheme from "../../../hooks/useTheme";
import convertFromIdToOfficeName from "../../../helpers/convertFromIdToOfficeName";

export default function StatusLocation() {
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const currentTheme = useTheme();

  return (
    <div className={`mr-1 flex items-baseline gap-1`}>
      <Icon
        className={`h-3 w-3 fill-${currentTheme}-400 opacity-50`}
        icon="mapPin"
      />
      <p
        className={`font-mono uppercase text-${currentTheme}-400 tracking-widest`}
      >
        {convertFromIdToOfficeName(globallySelectedOfficeId)}
      </p>
    </div>
  );
}
