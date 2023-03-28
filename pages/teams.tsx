import React, { useState, useEffect, useContext } from "react";
import TeamsControlsBar from "../components/teams/TeamsControlsBar";
import BackupMessage from "../components/teams/TeamsBackupMessage";
import Spinner from "../components/Spinner";
import ICoworker from "../typings/interfaces/ICoworker";
import { CTeams } from "../components/contexts/CTeams";
import Coworkers from "../components/teams/TeamsViewCoworkersList";
import useOffice from "../stores/SOffices";
import useCoworkers from "../stores/SCoworkers";

export default function Teams() {
  const c = useContext(CTeams);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const [displayedCoworkers, setDisplayedCoworkers] = useState<ICoworker[]>([]);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoadingCoworkersListFromStore = useCoworkers((s) => s.isLoading);

  function filterCoworkers(coworkersList: ICoworker[]) {
    if (c?.searchForUser) {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return (
            (coworker.forename.includes(c?.searchForUser) ||
              coworker.surname.includes(c?.searchForUser)) &&
            coworker.office === c?.locallySelectedOfficeName
          );
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    } else {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return coworker.office === c?.locallySelectedOfficeName;
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    }
  }

  useEffect(() => {
    c?.setLocallySelectedOfficeName(globallySelectedOfficeName);
  }, []);

  useEffect(() => {
    setDisplayedCoworkers(coworkers as ICoworker[]);
  }, [coworkers]);

  useEffect(() => {
    filterCoworkers(coworkers as ICoworker[]);
  }, [c?.searchForUser, c?.locallySelectedOfficeName]);

  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-8">
        <div
          className={`${
            c?.isListView && displayedCoworkers?.length > 0
              ? "flex-col border-8 p-4"
              : "snap-x snap-mandatory flex-row items-center border-x-[12px] py-4 px-[50px]"
          } flex h-[300px] w-full gap-10 overflow-scroll rounded-lg border-transparent bg-pink-300/25 shadow-inner`}
        >
          <>
            {isLoadingCoworkersListFromStore ? (
              <Spinner />
            ) : (
              <>
                {displayedCoworkers?.length > 0 ? (
                  <Coworkers coworkers={displayedCoworkers} />
                ) : (
                  <BackupMessage />
                )}
              </>
            )}
          </>
        </div>
        <TeamsControlsBar />
      </div>
    </>
  );
}
