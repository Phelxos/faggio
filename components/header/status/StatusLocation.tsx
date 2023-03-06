import React from "react";
import useOffice from "../../../stores/SOffices";
import Icon from "../../icons/Icon";
import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";
import useTheme from "../../../hooks/useTheme";

export default function StatusLocation() {
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const currentTheme = useTheme();

  return (
    <div className="flex items-center">
      <p className={`font-mono font-bold uppercase text-${currentTheme}-500`}>
        {EOfficesEnglishToGerman[globallySelectedOfficeName]}
      </p>
      <Icon className={`ml-1 h-3 w-3 fill-${currentTheme}-600`} icon="mapPin" />
    </div>
  );
}
