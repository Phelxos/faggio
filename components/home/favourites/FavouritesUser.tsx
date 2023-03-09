import Image from "next/image";
import React from "react";
import useNextBooking from "../../../hooks/useNextBooking";

interface Props {
  imgSrc: string | undefined;
  id: number;
  forename: string;
  surname: string;
}

export default function FavouritesUser({
  imgSrc,
  id,
  forename,
  surname,
}: Props) {
  const nextBooking = useNextBooking(id)?.toDateString();
  return (
    <div>
      <Image
        width={50}
        height={50}
        src={imgSrc || ""}
        alt={`${forename} ${surname}`}
        className="w-full rounded-full border-2 border-pink-400/50 shadow-inner"
      />
      <div>{nextBooking || id}</div>
    </div>
  );
}
