import { FC } from "react";
import ICoworker from "../../../../../../typings/interfaces/ICoworker";
import Item from "./VerticalItem";

interface Props {
  coworkers: ICoworker[] | undefined;
}

const Vertical: FC<Props> = ({ coworkers }) => {
  return (
    <ul className="flex w-full flex-col items-stretch gap-8">
      {coworkers?.map((coworker: ICoworker, i: number) => (
        <Item coworker={coworker} key={i} className="snap-center" />
      ))}
    </ul>
  );
};

export default Vertical;
