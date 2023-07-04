import { FC } from "react";
import UserCard from "../../../../../../components/user/UserCard";
import ICoworker from "../../../../../../typings/interfaces/ICoworker";

interface Props {
  coworkers: ICoworker[] | undefined;
}

const Horizontal: FC<Props> = ({ coworkers }) => {
  return (
    <>
      {coworkers?.map((coworker: ICoworker, i: number) => (
        <UserCard
          forename={coworker.forename}
          surname={coworker.surname}
          officeId={coworker.officeId}
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
};

export default Horizontal;
