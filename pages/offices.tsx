import React, { useEffect, useContext, useState } from "react";
import MapOffices from "../components/offices/officesMap/OfficesMap";
import OfficeInformationCard from "../components/offices/officesCard/OfficesCard";
import useOffice from "../stores/SOffices";
import OfficesMapHeader from "../components/offices/officesMap/OfficesMapHeader";

export default function Offices() {
  const globallySelectedOffice = useOffice((s) => s.globallySelectedOffice);

  return (
    <div className="flex w-full grow flex-col items-center items-stretch gap-16">
      <div className="w-full">
        <OfficesMapHeader />
        <div className="to-transpartent bg-gradient-to-b from-amber-700">
          <MapOffices />
        </div>
      </div>
      <OfficeInformationCard {...globallySelectedOffice} />
    </div>
  );
}
