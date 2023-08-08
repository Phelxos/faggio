"use client";

import { FC } from "react";
import Icon from "../../../../icons/Icon";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";
import useTheme from "../../../../../../hooks/useTheme";
import useOffice from "../../../../../../stores/SOffices";

const Location: FC = () => {
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
};

export default Location;
