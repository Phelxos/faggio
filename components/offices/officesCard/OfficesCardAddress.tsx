import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface Props {
  street: string;
  housenumber: string;
  postcode: string;
}

export default function OfficesCardAddress({
  street,
  housenumber,
  postcode,
}: Props) {
  return (
    <div className="rounded-lg border-2 border-amber-800 bg-amber-600">
      <div className="flex items-center justify-between bg-amber-900/90 p-4">
        <span className="ml-1 text-lg font-extralight tracking-widest text-amber-400/75">
          Adresse
        </span>
        <button className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faCopy}
            className="h-3 w-3 rounded-full bg-amber-700/50 p-2 text-amber-600 opacity-75"
          />
        </button>
      </div>
      <div className="flex w-full flex-col gap-1 p-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xs font-semibold uppercase tracking-widest text-amber-900">
              {street} {housenumber}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faCopy}
              className="h-3 w-3 rounded-full bg-amber-800/25 p-2 text-amber-900/50"
            />
          </button>
        </div>
        <hr className="my-2 border-amber-900 opacity-25" />
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xl font-thin uppercase text-amber-900">
              {postcode}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faCopy}
              className="h-3 w-3 rounded-full bg-amber-800/25 p-2 text-amber-900/50"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
