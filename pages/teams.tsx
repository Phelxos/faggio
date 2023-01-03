import React, { useState, useEffect, useContext } from "react";
import TeamsControlsBar from "../components/pageTeams/TeamsControlsBar";
import BackupMessage from "../components/pageTeams/TeamsBackupMessage";
import Spinner from "../components/Spinner";
import { server } from "../config/index";
import IColleague from "../typings/interfaces/IColleague";
import { ContextTeams } from "../components/contexts/ContextTeams";
import TeamsViewColleagues from "../components/pageTeams/TeamsViewColleagues";

interface Props {
  allColleaguesfromAPI: IColleague[];
}

export default function Teams({ allColleaguesfromAPI }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedColleagues, setDisplayedColleagues] =
    useState<IColleague[]>();
  const [allColleagues, setAllColleagues] = useState<IColleague[]>();
  const context = useContext(ContextTeams);

  const fetchImagesOfColleagues = async (): Promise<
    IColleague[] | undefined
  > => {
    try {
      setIsLoading(true);
      const resRandomUsers = await fetch(
        `https://randomuser.me/api/?results=${allColleaguesfromAPI.length}`
      );
      const randomUsers = await resRandomUsers.json();
      const imgSources = randomUsers.results;

      const colleaguesWithPhotos = allColleaguesfromAPI.map(
        (colleague: IColleague, i: number) => {
          return {
            ...colleague,
            imgSrc: imgSources[i].picture.large as string,
          };
        }
      );
      setDisplayedColleagues(colleaguesWithPhotos);
      setAllColleagues(colleaguesWithPhotos);
    } catch (e) {
      console.error(
        "Something has gone wrong while fetching the photos of the colleagues."
      );
    } finally {
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchImagesOfColleagues();
  }, []);

  useEffect(() => {
    if (context?.searchForUser) {
      const filteredListOfColleagues = allColleagues?.filter(
        (colleague: IColleague) => {
          return (
            colleague.forename.includes(context?.searchForUser) ||
            colleague.surname.includes(context?.searchForUser)
          );
        }
      );
      setDisplayedColleagues(filteredListOfColleagues);
    } else {
      setDisplayedColleagues(allColleagues);
    }
  }, [context?.searchForUser]);

  useEffect(() => {
    const filteredListOfColleagues = allColleagues?.filter(
      (colleague: IColleague) => {
        return (
          (colleague.forename.includes(context.searchForUser) ||
            colleague.surname.includes(context.searchForUser)) &&
          colleague.office === context?.displayedOffice
        );
      }
    );
    setDisplayedColleagues(filteredListOfColleagues);
  }, [context?.displayedOffice]);

  return (
    <div className="flex w-full grow flex-col items-center gap-12">
      <div
        className={`${
          context?.isListView && displayedColleagues?.length > 0
            ? "flex-col border-8 p-4"
            : "snap-x snap-mandatory flex-row items-center border-x-[12px] py-4 px-[50px]"
        } flex h-[400px] w-full gap-10 overflow-scroll rounded border-slate-700 bg-slate-700 shadow-inner`}
      >
        {isLoading && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Spinner />
          </div>
        )}
        {displayedColleagues?.length > 0 && (
          <TeamsViewColleagues colleagues={displayedColleagues} />
        )}
        {displayedColleagues?.length === 0 && <BackupMessage />}
      </div>
      <TeamsControlsBar />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/teams`);
  let allColleaguesfromAPI = await res.json();

  return {
    props: {
      allColleaguesfromAPI,
    },
  };
}
