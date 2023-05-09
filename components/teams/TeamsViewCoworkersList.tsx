import React, { useContext } from "react";
import ICoworker from "../../typings/interfaces/ICoworker";
import UserCard from "../user/UserCard";
import { CTeams } from "../contexts/CTeams";
import Coworker from "./TeamsViewCoworkersItem";

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
          coworkerId={coworker.coworkerId}
          position={coworker.position}
          email={coworker.email}
          phone={coworker.phone}
          messenger={coworker.messenger}
          favorites={coworker.favorites}
        />
      ))}
    </>
  );
}

function List({ coworkers }: { coworkers: ICoworker[] | undefined }) {
  return (
    <ul className="flex w-full flex-col items-stretch gap-8">
      {coworkers?.map((coworker: ICoworker, i: number) => (
        <Coworker coworker={coworker} key={i} className="snap-center" />
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
