import React from "react";
import useOffice from "../../../stores/SOffices";
import Icon from "../../icons/Icon";
import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";
import TTheme from "../../../typings/types/TThemes";

interface IProps {
  color: TTheme;
}

export default function StatusLocation({ color }: IProps) {
  const displayedOffice = useOffice((s) => s.displayedOffice);
  return (
    <div className="flex items-center">
      <p className={`font-mono font-bold uppercase text-${color}-500`}>
        {EOfficesEnglishToGerman[displayedOffice]}
      </p>
      <Icon className="ml-1 h-3 w-3 fill-slate-600" icon="mapPin" />
    </div>
  );
}
