import React, { useState, useEffect, useContext } from "react";
import UserCard from "../components/user/UserCard";
import TeamsControlsBar from "../components/teams-controls-bar/TeamsControlsBar";
import Spinner from "../components/Spinner";
import { server } from "../config/index";
import IColleague from "../typings/interfaces/IColleague";
import { ContextTeams } from "../components/contexts/ContextTeams";
import Icon from "../components/icons/Icon";

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
      <div className="flex h-[400px] w-full snap-x snap-mandatory scroll-m-2 flex-row items-center gap-10 overflow-scroll rounded border-x-[12px] border-slate-700 bg-slate-700 px-[50px] py-4 shadow-inner">
        {isLoading ? (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {displayedColleagues!.length > 0 ? (
              displayedColleagues?.map((colleague: IColleague, i: number) => (
                <UserCard
                  forename={colleague.forename}
                  surname={colleague.surname}
                  office={colleague.office}
                  imgSrc={colleague.imgSrc}
                  key={i}
                />
              ))
            ) : context?.activeButton === "left" ? (
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
            ) : context?.activeButton === "center" ? (
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
                  .
                </p>
              </div>
            ) : context?.activeButton === "right" ? (
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
            ) : (
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
            )}
          </>
        )}
      </div>
      <TeamsControlsBar />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/api/teams`);
  let allColleaguesfromAPI = await res.json();

  return {
    props: {
      allColleaguesfromAPI,
    },
  };
}
