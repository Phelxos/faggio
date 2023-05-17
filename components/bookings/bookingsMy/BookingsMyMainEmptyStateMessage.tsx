import React, { useContext } from "react";
import Icon from "../../icons/Icon";
import { CBookings } from "../../contexts/CBookings";
import convertFromIdToOfficeName from "../../../helpers/convertFromIdToOfficeName";

export default function BackupMessage() {
  const c = useContext(CBookings);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8 text-emerald-200/50">
      <Icon
        icon="exclamationCircle"
        className="h-32 w-32 fill-emerald-300/25 opacity-50"
      ></Icon>
      <p className="text-center">
        <span className="text-xs">Du hast noch keine Buchungen in </span>
        <strong className="mx-auto mt-2 block w-full rounded bg-emerald-900/50 p-2 font-mono font-light uppercase tracking-widest">
          {convertFromIdToOfficeName(c?.locallySelectedOfficeId!)}
        </strong>
      </p>
    </div>
  );
}
