import React, { useState, useEffect } from "react";
import UserCard from "../components/user/UserCard";
import ControlsBar from "../components/ControlsBar";
import Spinner from "../components/Spinner";
import { server } from "../config/index";
import IColleague from "../typings/interfaces/IColleague";

interface Props {
  allColleagues: IColleague[];
}

export default function Teams({ allColleagues }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [colleagues, setColleagues] = useState<IColleague[]>();

  useEffect(() => {
    const fetchImagesOfColleagues = async (): Promise<
      IColleague[] | undefined
    > => {
      try {
        setIsLoading(true);
        const resRandomUsers = await fetch(
          `https://randomuser.me/api/?results=${allColleagues.length}`
        );
        const randomUsers = await resRandomUsers.json();
        const imgSources = randomUsers.results;

        const colleaguesWithPhotos = allColleagues.map(
          (colleague: IColleague, i: number) => {
            return {
              ...colleague,
              imgSrc: imgSources[i].picture.large as string,
            };
          }
        );
        setColleagues(colleaguesWithPhotos);
      } catch (e) {
        console.error(
          "Something has gone wrong while fetching the photos of the colleagues."
        );
      } finally {
        setIsLoading(false);
        return;
      }
    };
    fetchImagesOfColleagues();
  }, []);

  return (
    <div className="flex w-full grow flex-col items-center gap-12">
      <div className="flex h-[400px] w-full snap-x snap-mandatory scroll-m-2 flex-row items-center gap-10 overflow-scroll rounded border-x-[12px] border-slate-700 bg-slate-700 px-[50px] py-4 shadow-inner">
        {true ? (
          <Spinner />
        ) : (
          colleagues?.map((colleague: IColleague, i: number) => (
            <UserCard
              forename={colleague.forename}
              surname={colleague.surname}
              office={colleague.office}
              imgSrc={colleague.imgSrc}
              key={i}
            />
          ))
        )}
      </div>
      <ControlsBar />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/api/teams`);
  let allColleagues = await res.json();
  // const randomNumber = Math.floor(Math.random() * allColleagues.length);
  // const randomColleague = allColleagues[randomNumber];

  return {
    props: {
      allColleagues,
    },
  };
}
