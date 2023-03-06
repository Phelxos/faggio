import React, { useContext } from "react";
import Icon from "../icons/Icon";
import { CTeams } from "../contexts/CTeams";

export default function BackupMessage() {
  const c = useContext(CTeams);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-pink-200/50">
      <Icon
        icon="exclamationCircle"
        className="h-32 w-32 fill-pink-300/50 opacity-50"
      ></Icon>
      <p className="text-center">
        Es gibt keine Mitarbeiter in{" "}
        <strong className="mx-auto my-2 block w-full rounded bg-pink-500/25 p-2 font-mono uppercase">
          {c?.locallySelectedOfficeName}
        </strong>{" "}
        {c?.searchForUser && (
          <>
            mit der Buchstabenfolge{" "}
            <strong className="mx-auto my-2 block w-full rounded bg-pink-700/75 p-2 font-mono uppercase">
              {c?.searchForUser}
            </strong>{" "}
            im Namen.
          </>
        )}
      </p>
    </div>
  );
}
