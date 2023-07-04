import { FC } from "react";
import ICoworker from "../../../../../../typings/interfaces/ICoworker";
import Coworker from "./Coworker";

interface Props {
  favoriteCoworkers: number[];
  allCoworkers: ICoworker[];
}

const CoworkerList: FC<Props> = ({ favoriteCoworkers, allCoworkers }) => {
  return (
    <>
      {favoriteCoworkers.map((favoriteId, i) => {
        const coworker = (allCoworkers as ICoworker[])?.find(
          (coworker: ICoworker) => coworker.coworkerId === favoriteId
        );
        if (coworker) {
          return <Coworker key={i} coworkerId={coworker.coworkerId} />;
        }
      })}
    </>
  );
};

export default CoworkerList;
