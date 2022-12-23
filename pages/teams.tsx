import React, { useState, useEffect } from "react";
import UserCard from "../components/user/UserCard";
import ControlsBar from "../components/ControlsBar";
import Spinner from "../components/Spinner";
import { server } from "../config/index";
import type { Colleague } from "./api/teams";

interface Props {
  allColleagues: Colleague[];
}

export default function Teams({ allColleagues }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [colleagues, setColleagues] = useState<Colleague[]>();

  useEffect(() => {
    const fetchImagesOfColleagues = async (): Promise<
      Colleague[] | undefined
    > => {
      try {
        setIsLoading(true);
        const resRandomUsers = await fetch(
          `https://randomuser.me/api/?results=${allColleagues.length}`
        );
        const randomUsers = await resRandomUsers.json();
        const imgSources = randomUsers.results;

        const colleaguesWithPhotos = allColleagues.map(
          (colleague: Colleague, i: number) => {
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
      <div className="flex h-[400px] w-full scroll-m-2 flex-row items-center gap-10 overflow-scroll rounded border-x-[12px] border-slate-700 bg-slate-700 py-4 shadow-inner">
        {isLoading ? (
          <Spinner />
        ) : (
          colleagues?.map((colleague: Colleague, i: number) => (
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
