import React, { useState, useEffect, useContext } from "react";
import TeamsControlsBar from "../components/teams/TeamsControlsBar";
import BackupMessage from "../components/teams/TeamsBackupMessage";
import Spinner from "../components/Spinner";
import { server } from "../config/index";
import ICoworker from "../typings/interfaces/ICoworker";
import { CTeams } from "../components/contexts/CTeams";
import TeamsViewCoworkers from "../components/teams/TeamsViewCoworkers";
import useOffice from "../stores/SOffices";

interface Props {
  allCoworkersFromAPI: ICoworker[];
}

export default function Teams({ allCoworkersFromAPI }: Props) {
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const [displayedCoworkers, setDisplayedCoworkers] = useState<ICoworker[]>();
  const [allCoworkers, setAllCoworkers] =
    useState<ICoworker[]>(allCoworkersFromAPI);
  const c = useContext(CTeams);

  function filterCoworkers(coworkersList: ICoworker[] | undefined) {
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
    filterCoworkers(allCoworkers);
    console.log(c?.locallySelectedOfficeName);
  }, [c?.searchForUser, c?.locallySelectedOfficeName]);

  useEffect(() => {
    // const filteredListOfCoworkers = allCoworkers?.filter(
    //   (coworker: ICoworker) => {
    //     return (
    //       (coworker.forename.includes(c!.searchForUser) ||
    //         coworker.surname.includes(c!.searchForUser)) &&
    //       coworker.office === c?.locallySelectedOfficeName
    //     );
    //   }
    // );
    // console.log(filteredListOfCoworkers);
    // setDisplayedCoworkers(filteredListOfCoworkers);
  }, [c?.locallySelectedOfficeName]);

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
          {displayedCoworkers?.length > 0 && (
            <TeamsViewCoworkers coworkers={displayedCoworkers} />
          )}
          {displayedCoworkers?.length === 0 && <BackupMessage />}
        </div>
        <TeamsControlsBar />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/teams`);
  let allCoworkersFromAPI = await res.json();

  return {
    props: {
      allCoworkersFromAPI,
    },
  };
}
