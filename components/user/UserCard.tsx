import React from "react";
import UserCardInfo from "./UserCardInfo";
import UserCardControls from "./UserCardControls";
import IColleague from "../../typings/interfaces/IColleague";
import Image from "next/image";

export default function UserCard({
  forename,
  surname,
  office,
  imgSrc,
}: IColleague) {
  return (
    <div className="grid h-[250px] min-w-[275px] grid-cols-[2fr_3fr] grid-rows-[3fr_2fr] place-items-stretch gap-2 rounded border-4 border-pink-800 bg-slate-800 text-pink-100">
      <div className="relative flex flex-col items-center justify-center pl-4">
        <Image
          width={100}
          height={100}
          src={imgSrc || ""}
          alt={`${forename} ${surname}`}
          className="w-full rounded-lg border-2 border-pink-800 shadow-inner"
        />
      </div>
      <UserCardInfo forename={forename} surname={surname} office={office} />
      <UserCardControls />
    </div>
  );
}
