import React from "react";
import FavouriteButton from "./UserFavouriteButton";

interface Props {
  forename: string;
  surname: string;
  id: number;
}

export default function UserCardInfo({ forename, surname, id }: Props) {
  return (
    <div className="relative flex h-full cursor-pointer flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <FavouriteButton id={id} />
      <div className="flex flex-col uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
      </div>
    </div>
  );
}
