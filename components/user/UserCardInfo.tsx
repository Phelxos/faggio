import React from "react";
import ICoworker from "../../typings/interfaces/ICoworker";

export default function UserCardInfo({ forename, surname, office }: ICoworker) {
  return (
    <div className="flex h-full flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <div className="flex flex-col uppercase uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
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
