"use client";

import Image from "next/image";
import { FC } from "react";
import IOffice from "../../../../../typings/interfaces/IOffice";
import Adress from "./elements/Adress";
import Quickies from "./elements/Quickies";
import Title from "./elements/Title";
import useOffice from "../../../../../stores/SOffices";

const Card: FC = () => {
  const {
    city,
    district,
    headcount,
    areaInSquareMeters,
    workstations,
    areDogsAllowed,
    description,
    imgSrc = "/images/office.jpg",
    street,
    houseNumber,
    postcode,
  } = useOffice((s) => s.globallySelectedOffice);

  return (
    <div className="w-full rounded-lg border-4 border-amber-900/75 bg-amber-700">
      <div className="relative rounded bg-amber-700">
        <Image
          className="h-full w-full border-b-4 border-amber-900/50 object-cover object-center md:h-36 lg:h-48"
          src={imgSrc ?? ""}
          alt="office"
          width={100}
          height={100}
        />
        <Title
          city={city}
          district={district}
          className="absolute bottom-3 right-2 rounded-lg p-2 backdrop-blur-xl"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="mb-4 flex items-stretch gap-4">
          <Quickies
            headcount={headcount as number}
            workstations={workstations as number}
            areDogsAllowed={areDogsAllowed as boolean}
            areaInSquareMeters={areaInSquareMeters as number}
          />
          <div className="rounded-xl bg-amber-800/75 p-4 text-sm leading-relaxed text-amber-200">
            {description}
          </div>
        </div>
        <Adress
          street={street}
          houseNumber={houseNumber}
          postcode={postcode}
          city={city}
        />
      </div>
    </div>
  );
};

export default Card;
