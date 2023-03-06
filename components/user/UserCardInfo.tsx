import React from "react";
import ICoworker from "../../typings/interfaces/ICoworker";
import Icon from "../icons/Icon";

export default function UserCardInfo({ forename, surname }: ICoworker) {
  return (
    <div className="relative flex h-full cursor-pointer flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <button className="absolute top-3 right-3 flex flex-col items-center justify-center rounded-full bg-pink-500 p-1">
        <Icon icon="star" className="h-6 w-6 fill-pink-600" />
      </button>
      <div className="flex flex-col uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
      </div>
    </div>
  );
}
