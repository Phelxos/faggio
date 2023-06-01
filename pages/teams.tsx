/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import TeamsControlsBar from "../components/teams/TeamsControlsBar";
import BackupMessage from "../components/teams/TeamsEmptyStateMessage";
import Spinner from "../components/spinners/Spinner";
import ICoworker from "../typings/interfaces/ICoworker";
import { CTeams } from "../components/contexts/CTeams";
import Coworkers from "../components/teams/TeamsViewCoworkersList";
import useOffice from "../stores/SOffices";
import useCoworkers from "../stores/SCoworkers";

export default function Teams() {
  const c = useContext(CTeams);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
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
            coworker.officeId === c?.locallySelectedOfficeId
          );
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    } else {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return coworker.officeId === c?.locallySelectedOfficeId;
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    }
  }

  useEffect(() => {
    c?.setLocallySelectedOfficeId(globallySelectedOfficeId);
  }, []);

  useEffect(() => {
    setDisplayedCoworkers(coworkers as ICoworker[]);
  }, [coworkers]);

  useEffect(() => {
    filterCoworkers(coworkers as ICoworker[]);
  }, [c?.searchForUser, c?.locallySelectedOfficeId]);

  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-8">
        <div
          className={`${
            c?.isListView && displayedCoworkers?.length > 0
              ? "snap-y snap-mandatory flex-col border-8 p-4"
              : "snap-x snap-mandatory flex-row items-center border-x-[12px] px-[50px] py-4"
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
