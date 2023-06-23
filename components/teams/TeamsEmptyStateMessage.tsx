import React, { useContext } from "react";
import Icon from "../icons/Icon";
import { CTeams } from "../contexts/CTeams";
import useOffice from "../../stores/SOffices";
import convertFromIdToOfficeName from "../../helpers/convertFromIdToOfficeName";

export default function BackupMessage() {
  const c = useContext(CTeams);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-pink-200/50">
      <Icon
        icon="exclamationCircle"
        className="h-52 w-52 fill-pink-300/25 opacity-50"
      ></Icon>
      <p className="w-full text-center">
        Es gibt keine Mitarbeiter in{" "}
        <strong className="min-w-3/4 max-w-3/4 mx-auto my-2 block rounded bg-pink-500/25 px-4 py-2 font-mono uppercase tracking-widest">
          {convertFromIdToOfficeName(c?.locallySelectedOfficeId as number)}
        </strong>{" "}
        {c?.searchForUser && (
          <>
            mit der Buchstabenfolge{" "}
            <strong className="min-w-3/4 max-w-3/4 mx-auto my-2 block overflow-scroll rounded bg-pink-700/75 px-4 py-2 font-mono uppercase">
              {c?.searchForUser}
            </strong>{" "}
            im Namen.
          </>
        )}
      </p>
    </div>
  );
}
