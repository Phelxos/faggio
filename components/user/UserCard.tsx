import React from "react";
import type { Colleague } from "../../pages/api/teams";
import Image from "next/image";
import Icon from "../icons/Icon";

function UserCardInfo({ forename, surname, office }: Colleague) {
  return (
    <div className="flex h-full flex-col justify-center p-2">
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-thin tracking-wide">{forename}</span>
        <span className="text-xl font-bold uppercase tracking-widest">
          {surname}
        </span>
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

function UserCardControls() {
  return <div className="col-span-2 bg-pink-400"></div>;
}

export default function UserCard({
  forename,
  surname,
  office,
  imgSrc,
}: Colleague) {
  console.log(imgSrc);
  return (
    <div className="grid h-2/3 w-5/6 grid-cols-[2fr_3fr] grid-rows-[3fr_2fr] place-items-stretch gap-2 rounded bg-pink-900 p-4 text-pink-100">
      <div className="relative flex flex-col items-center justify-center ">
        <Image
          width={100}
          height={100}
          src={imgSrc || ""}
          alt={`${forename} ${surname}`}
          className="rounded-lg border-2 border-pink-800 shadow-inner"
        />
      </div>
      <UserCardInfo forename={forename} surname={surname} office={office} />
      <UserCardControls />
    </div>
  );
}
