import Image from "next/image";
import React from "react";
import IOffice from "../../../typings/interfaces/IOffice";
import OfficesCardTitle from "./OfficesCardTitle";

export default function OfficeInformationCard({
  city,
  district,
  adress,
  areaInSquareMetres,
  headcount,
  workstations,
  areDogsAllowed,
  description,
  imgSrc = "/images/office.jpg",
}: IOffice) {
  return (
    <div className="w-full">
      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800 bg-amber-700">
        <Image
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={imgSrc ?? ""}
          alt="blog"
          width={100}
          height={100}
        />
        <div className="grid grid-cols-1 grid-rows-2 gap-4 p-8">
          <OfficesCardTitle city={city} district={district} />
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="grid grid-cols-1 grid-rows-2"></div>
            <p className="text-xs leading-relaxed text-amber-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
