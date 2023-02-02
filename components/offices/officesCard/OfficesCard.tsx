import Image from "next/image";
import React from "react";
import IOffice from "../../../typings/interfaces/IOffice";
import OfficesCardAddress from "./OfficesCardAddress";
import OfficesCardQuickies from "./OfficesCardQuickies";
import OfficesCardTitle from "./OfficesCardTitle";

export default function OfficeInformationCard({
  city,
  district,
  address,
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
        <div className="flex flex-col gap-4 p-8">
          <OfficesCardTitle city={city} district={district} />
          <div className="flex">
            <OfficesCardQuickies
              headcount={headcount}
              workstations={workstations}
              areDogsAllowed={areDogsAllowed}
              areaInSquareMetres={areaInSquareMetres}
            />
            <div className="flex flex-col">
              <p className="text-xs leading-relaxed text-amber-100">
                {description}
              </p>
              <OfficesCardAddress address={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
