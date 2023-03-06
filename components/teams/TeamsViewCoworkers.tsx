import React, { useContext } from "react";
import ICoworker from "../../typings/interfaces/ICoworker";
import UserCard from "../user/UserCard";
import { CTeams } from "../contexts/CTeams";
import Image from "next/image";

function Cards({ coworkers }: { coworkers: ICoworker[] | undefined }) {
  return (
    <>
      {coworkers?.map((coworker: ICoworker, i: number) => (
        <UserCard
          forename={coworker.forename}
          surname={coworker.surname}
          office={coworker.office}
          imgSrc={coworker.imgSrc}
          key={i}
          id={coworker.id}
        />
      ))}
    </>
  );
}

function List({ coworkers }: { coworkers: ICoworker[] | undefined }) {
  return (
    <ul className="flex w-full snap-always flex-col items-stretch gap-6">
      {coworkers?.map((coworker: ICoworker, i: number) => (
        <li
          key={i}
          className="flex items-center gap-2 rounded-lg p-4 text-sm text-pink-200 odd:bg-pink-800 even:bg-pink-900 "
        >
          <Image
            src={coworker.imgSrc || ""}
            alt={`${coworker.forename} ${coworker.surname}`}
            width={50}
            height={50}
            className="mr-4 inline rounded-full border-2 border-pink-500"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-thin uppercase tracking-wider text-pink-300">
              {coworker.forename}
            </span>{" "}
            <span className="font-semibold uppercase tracking-widest text-slate-900">
              {coworker.surname}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function TeamsViewCoworkers({
  coworkers,
}: {
  coworkers: ICoworker[] | undefined;
}) {
  const context = useContext(CTeams);

  return (
    <>
      {context?.isListView ? (
        <List coworkers={coworkers} />
      ) : (
        <Cards coworkers={coworkers} />
      )}
    </>
  );
}
