import { FC } from "react";
import FavouriteButton from "./UserFavoriteButton";

interface Props {
  forename: string;
  surname: string;
  id: number;
}

const UserCardInfo: FC<Props> = ({ forename, surname, id }) => {
  return (
    <div className="relative flex h-full cursor-pointer flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <FavouriteButton id={id} className="absolute right-3 top-3" />
      <div className="flex flex-col uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
      </div>
    </div>
  );
};

export default UserCardInfo;
