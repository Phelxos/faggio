import React, { useEffect, useContext, useState } from "react";
import Icon from "../components/icons/Icon";
import MapOffices from "../components/MapOffices";
import OfficeInformationCard from "../components/offices/OfficeInformationCard";

export default function Offices() {
  return (
    <div className="w-full grow">
      <div className="rounded-lg bg-gradient-to-b from-sky-700 to-slate-900 p-4">
        <h2 className="text-2xl font-light tracking-widest text-slate-900/50">
          Standort wählen
        </h2>
        <div className="relative mt-1 flex items-center justify-start border-t-2 border-sky-900 py-2">
          <Icon
            icon="informationCircle"
            className="-top-10 -right-2 mr-1 h-7 w-7 fill-slate-900/75"
          />
          <h3 className="z-10 text-xs uppercase">
            auf Stadt <strong>tippen</strong>
          </h3>
        </div>
        <MapOffices />
      </div>
      {/* <OfficeInformationCard /> */}
    </div>
  );
}
