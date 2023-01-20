import React from "react";
import ICoworker from "../../typings/interfaces/ICoworker";

export default function UserCardInfo({ forename, surname, office }: ICoworker) {
  return (
    <div className="flex h-full flex-col justify-end rounded-tr-lg bg-pink-600 p-2 text-slate-900">
      <div className="flex flex-col uppercase uppercase">
        <span className="text-lg font-extralight">{forename}</span>
        <span className="text-xs font-bold">{surname}</span>
      </div>
      {/* <div className="flex items-center gap-2">
        {office && (
          <Icon icon="buildingOffice" className="h-6 w-6 opacity-50" />
        )}
        <span className="text-sm tracking-widest">{office}</span>
      </div> */}
    </div>
  );
}
