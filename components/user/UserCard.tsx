import React from "react";
import UserCardInfo from "./UserCardInfo";
import UserCardControls from "./UserCardControls";
import ICoworker from "../../typings/interfaces/ICoworker";
import Image from "next/image";

export default function UserCard({
  forename,
  surname,
  office,
  imgSrc,
  id,
}: ICoworker) {
  return (
    <div className="grid h-[250px] min-w-[275px] snap-center grid-cols-[2.5fr_2fr] grid-rows-[3fr_2fr] place-items-stretch gap-2 rounded-lg border-[8px] border-transparent bg-slate-800 text-pink-100">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          src={imgSrc || ""}
          alt={`${forename} ${surname}`}
          className="w-full rounded-tl-lg border-2 border-slate-500/50 shadow-inner"
        />
      </div>
      <UserCardInfo
        forename={forename}
        surname={surname}
        office={office}
        id={id}
      />
      <UserCardControls />
    </div>
  );
}
