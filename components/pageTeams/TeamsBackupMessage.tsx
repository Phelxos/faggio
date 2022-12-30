import React, { useContext } from "react";
import Icon from "../icons/Icon";
import { ContextTeams } from "../contexts/ContextTeams";

function NoColleague() {
  const context = useContext(ContextTeams);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <Icon
        icon="exclamationCircle"
        className="h-32 w-32 fill-slate-800 opacity-50"
      ></Icon>
      <p className="text-center">
        Es gibt keine Mitarbeiter mit der Buchstabenfolge{" "}
        <strong className="mx-auto my-2 block w-full rounded bg-slate-600 p-2 font-mono uppercase">
          {context?.searchForUser}
        </strong>{" "}
        im Namen.
      </p>
    </div>
  );
}

function NoColleagueInThisOffice() {
  const context = useContext(ContextTeams);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <Icon
        icon="exclamationCircle"
        className="h-32 w-32 fill-slate-800 opacity-50"
      ></Icon>
      <p className="text-center">
        Es gibt keine Mitarbeiter in{" "}
        <strong className="mx-auto my-2 block w-full rounded bg-slate-600 p-2 font-mono uppercase">
          {context?.displayedOffice}
        </strong>
      </p>
    </div>
  );
}

const BackupMessage = {
  NoColleague: NoColleague,
  NoColleagueInThisOffice: NoColleagueInThisOffice,
};

export default BackupMessage;
