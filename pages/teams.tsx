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
  const [isLoading, setIsLoading] = useState(true);
  const [displayedCoworkers, setDisplayedCoworkers] = useState<ICoworker[]>();
  const [allCoworkers, setAllCoworkers] = useState<ICoworker[]>();
  const context = useContext(CTeams);

  async function fetchImagesOfCoworkers(): Promise<ICoworker[] | undefined> {
    try {
      setIsLoading(true);
      const resRandomUsers = await fetch(
        `https://randomuser.me/api/?results=${allCoworkersFromAPI.length}`
      );
      const randomUsers = await resRandomUsers.json();
      const imgSources = randomUsers.results;

      const coworkersWithPhotos = allCoworkersFromAPI.map(
        (coworker: ICoworker, i: number) => {
          return {
            ...coworker,
            imgSrc: imgSources[i].picture.large as string,
          };
        }
      );
      filterCoworkers(coworkersWithPhotos);
      setAllCoworkers(coworkersWithPhotos);
    } catch (e) {
      console.error(
        "Something has gone wrong while fetching the photos of the coworkers."
      );
    } finally {
      setIsLoading(false);
      return;
    }
  }

  function filterCoworkers(coworkersList: ICoworker[] | undefined) {
    if (context?.searchForUser) {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return (
            (coworker.forename.includes(context?.searchForUser) ||
              coworker.surname.includes(context?.searchForUser)) &&
            coworker.office === context?.locallySelectedOfficeName
          );
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    } else {
      const filteredListOfCoworkers = coworkersList?.filter(
        (coworker: ICoworker) => {
          return coworker.office === context?.locallySelectedOfficeName;
        }
      );
      setDisplayedCoworkers(filteredListOfCoworkers);
    }
  }

  useEffect(() => {
    fetchImagesOfCoworkers();
    context!.setLocallySelectedOfficeName(globallySelectedOfficeName);
  }, []);

  useEffect(() => {
    filterCoworkers(allCoworkers);
  }, [context?.searchForUser]);

  useEffect(() => {
    const filteredListOfCoworkers = allCoworkers?.filter(
      (coworker: ICoworker) => {
        return (
          (coworker.forename.includes(context!.searchForUser) ||
            coworker.surname.includes(context!.searchForUser)) &&
          coworker.office === context?.locallySelectedOfficeName
        );
      }
    );
    setDisplayedCoworkers(filteredListOfCoworkers);
  }, [context?.locallySelectedOfficeName]);

  return (
    <>
      {isLoading || !displayedCoworkers ? (
        <Spinner />
      ) : (
        <div className="flex w-full grow flex-col items-center gap-12">
          <div
            className={`${
              context?.isListView && displayedCoworkers?.length > 0
                ? "flex-col border-8 p-4"
                : "snap-x snap-mandatory flex-row items-center border-x-[12px] py-4 px-[50px]"
            } flex h-[400px] w-full gap-10 overflow-scroll rounded border-slate-700 bg-slate-700 shadow-inner`}
          >
            {isLoading && (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Spinner />
              </div>
            )}
            {displayedCoworkers?.length > 0 && (
              <TeamsViewCoworkers coworkers={displayedCoworkers} />
            )}
            {displayedCoworkers?.length === 0 && <BackupMessage />}
          </div>
          <TeamsControlsBar />
        </div>
      )}
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
