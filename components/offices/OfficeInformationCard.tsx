import Image from "next/image";
import React from "react";
import IOffice from "../../typings/interfaces/IOffice";
import { EOfficesEnglishToGerman } from "../../typings/types/TOfficeCity";
import Icon from "../icons/Icon";

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
        <div className="p-6">
          <h2 className="mb-1 text-xs font-bold tracking-widest text-amber-900">
            {district}
          </h2>
          <h1 className="mb-3 text-4xl font-light uppercase tracking-widest text-amber-400">
            {EOfficesEnglishToGerman[city]}
          </h1>
          <p className="leading-relaxed text-amber-100">{description}</p>
          <div className="flex items-center">
            <span className="inline-flex items-center border-amber-900 py-1 pr-3 text-sm font-bold leading-none text-amber-500 md:ml-0 lg:ml-auto">
              <Icon icon="userGroup" className="mr-1 h-6 w-6 opacity-75" />
              {headcount}
            </span>
            <span className="inline-flex items-center text-sm font-bold leading-none text-amber-500">
              <Icon
                icon="computerDesktop"
                className="mr-2 h-6 w-6 opacity-75"
              />
              {workstations}
            </span>
          </div>
          <a className="inline-flex items-center rounded-lg border-2 border-amber-800 bg-amber-600 p-2 text-amber-900 md:mb-2 lg:mb-0">
            mehr Infos
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
