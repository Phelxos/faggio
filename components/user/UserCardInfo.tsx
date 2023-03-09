import React from "react";
import Icon from "../icons/Icon";

interface Props {
  forename: string;
  surname: string;
  isFavourite: boolean;
}

export default function UserCardInfo({
  forename,
  surname,
  isFavourite,
}: Props) {
  return (
    <div className="relative flex h-full cursor-pointer flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <button
        className={`absolute top-3 right-3 flex flex-col items-center justify-center rounded-full p-1 transition duration-150 ease-out hover:bg-pink-400 ${
          isFavourite ? "bg-pink-200" : "bg-pink-500"
        }`}
      >
        <Icon icon="star" className="h-6 w-6 fill-pink-600" />
      </button>
      <div className="flex flex-col uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
      </div>
    </div>
  );
}
