import Image from "next/image";
import React from "react";
import IOffice from "../../typings/interfaces/IOffice";
import { EOfficesEnglishToGerman } from "../../typings/types/TOfficeCity";
import Icon from "../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

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
        <div className="p-8">
          <h2 className="text-xs font-bold tracking-widest text-amber-900">
            {district}
          </h2>
          <h1 className="text-4xl font-light uppercase tracking-widest text-amber-400">
            {EOfficesEnglishToGerman[city]}
          </h1>
          <div className="flex items-center justify-around text-sm">
            <span className="flex items-center border-amber-900 font-bold text-amber-500">
              <Icon icon="userGroup" className="mr-1 h-6 w-6 opacity-50" />
              {headcount}
            </span>
            <span className="flex items-center font-bold text-amber-500">
              <Icon
                icon="computerDesktop"
                className="mr-1 h-6 w-6 opacity-50"
              />
              {workstations}
            </span>
            <span className="flex items-center font-bold text-amber-500">
              {areaInSquareMetres}
              <span className="ml-1 text-xs opacity-50">
                m<sup>2</sup>
              </span>
            </span>
            <span className="relative flex items-center justify-center text-amber-500">
              {areDogsAllowed ? (
                <>
                  <FontAwesomeIcon icon={faPaw} className="mr-1 h-5 w-5" />
                  <span className="text-xs opacity-75">erlaubt</span>
                </>
              ) : (
                <>
                  <Icon icon="noSymbol" className="h-8 w-8" />
                  <FontAwesomeIcon
                    icon={faPaw}
                    className="absolute h-4 w-4 opacity-75"
                  />
                </>
              )}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-amber-100">
            {description}
          </p>
          <button className="rounded-lg border-2 border-amber-800 bg-amber-600 px-3 py-2 text-sm text-amber-900">
            <a href="#" className="flex items-center">
              <Icon
                icon="arrowTopRightOnSquare"
                className="mr-1 h-6 w-6 opacity-50"
              />
              <span className="font-mono uppercase tracking-wider">mehr</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
