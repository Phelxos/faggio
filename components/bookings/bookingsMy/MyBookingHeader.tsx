import React, { useEffect, useContext} from "react";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useCurrentTheme from "../../../hooks/useCurrentTheme";

export default function MyBookingHeader() {
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const context = useContext(CBookings);
  const theme = useCurrentTheme();

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
  });

  return (
    <div className="flex flex-col w-full items-center justify-around rounded-t-lg bg-emerald-900 p-6 mt-10">
        <div className="font-mono font-thin text-slate-50 mb-5">
          Meine XX (bookedSlots.length filtered nach Standort) Buchungen in 
          </div>
        <div className="w-1/2">
          <SearchAndSelect
            value={context?.locallySelectedOfficeName}
            setValue={context!.setLocallySelectedOfficeName}
            listOfValues={allOfficeNames} 
            theme={theme}
          />
        </div>
          
    </div>
  );
}

// bookedSlots = [
//   {
//     datum: "tt.mm.jjjj",
//     office: "standort",
//   },
//   {
//     datum: "tt.mm.jjjj",
//     office: "standort",
//   },
//   {
//     datum: "tt.mm.jjjj",
//     office: "standort",
//   },
//   . 
//   . 
//   . 
// ]
// XX Buchungen: sowas wie bookedSlots.length einfügen
