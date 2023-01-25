import React from "react";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";




export default function MyBookingHeader() {
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const displayedOffice = useOffice((s) => s.displayedOffice);
  const setDisplayedOffice = useOffice((s) => s.setDisplayedOffice);

  return (
    <div className="flex flex-col w-full items-center justify-around rounded-t-lg bg-emerald-900 p-6 mt-10">
        <div className="font-mono font-thin text-slate-50 mb-5">
          Meine XX (bookedSlots.length filtered nach Standort) Buchungen in 
          </div>
        <div className="w-1/2">
          <SearchAndSelect
            value={displayedOffice}
            setValue={(event) => setDisplayedOffice(event)}
            listOfValues={allOfficeNames} 
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
