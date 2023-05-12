import React from "react";
import useOffice from "../../../stores/SOffices";
import Icon from "../../icons/Icon";
import useTheme from "../../../hooks/useTheme";
import convertFromIdToOfficeName from "../../../helpers/convertFromIdToOfficeName";

export default function StatusLocation() {
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const currentTheme = useTheme();

  return (
    <div className="flex items-center">
      <p className={`font-mono font-bold uppercase text-${currentTheme}-500`}>
        {convertFromIdToOfficeName(globallySelectedOfficeId)}
      </p>
      <Icon className={`ml-1 h-3 w-3 fill-${currentTheme}-600`} icon="mapPin" />
    </div>
  );
}
