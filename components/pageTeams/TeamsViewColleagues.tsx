import React, { useContext } from "react";
import IColleague from "../../typings/interfaces/IColleague";
import UserCard from "../user/UserCard";
import { ContextTeams } from "../contexts/ContextTeams";
import Image from "next/image";

function Cards({ colleagues }: { colleagues: IColleague[] | undefined }) {
  return (
    <>
      {colleagues?.map((colleague: IColleague, i: number) => (
        <UserCard
          forename={colleague.forename}
          surname={colleague.surname}
          office={colleague.office}
          imgSrc={colleague.imgSrc}
          key={i}
        />
      ))}
    </>
  );
}

function List({ colleagues }: { colleagues: IColleague[] | undefined }) {
  return (
    <ul className="flex w-full flex-col items-stretch gap-8">
      {colleagues?.map((colleague: IColleague, i: number) => (
        <li key={i} className="flex items-center gap-4">
          <Image
            src={colleague.imgSrc || ""}
            alt={`${colleague.forename} ${colleague.surname}`}
            width={50}
            height={50}
            className="inline rounded-full"
          />
          <span>{colleague.forename}</span> <span>{colleague.surname}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TeamsViewColleagues({
  colleagues,
}: {
  colleagues: IColleague[] | undefined;
}) {
  const context = useContext(ContextTeams);

  return (
    <>
      {context?.isListView ? (
        <List colleagues={colleagues} />
      ) : (
        <Cards colleagues={colleagues} />
      )}
    </>
  );
}
