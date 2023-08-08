import { FC } from "react";
import FavoriteButton from "../../../../../components/user/UserFavoriteButton";
import UserImage from "../../../../../components/user/UserImage";
import ICoworker from "../../../../../../typings/interfaces/ICoworker";

interface Props {
  coworker: ICoworker;
  className?: string;
}

const Item: FC<Props> = ({ coworker, className }) => {
  return (
    <li
      className={`flex items-center justify-between gap-2 rounded-lg p-4 text-sm text-pink-200 odd:bg-pink-800 even:bg-pink-900 ${className}`}
    >
      <div>
        <UserImage coworkerId={coworker.coworkerId} />
      </div>
      <div className="ml-2 flex grow flex-col">
        <span className="text-2xl font-thin uppercase tracking-wider text-pink-300">
          {coworker.forename}
        </span>{" "}
        <span className="font-semibold uppercase tracking-widest text-slate-900">
          {coworker.surname}
        </span>
      </div>
      <FavoriteButton
        id={coworker.coworkerId}
        className="border-2 border-pink-200/25"
      />
    </li>
  );
};

export default Item;
