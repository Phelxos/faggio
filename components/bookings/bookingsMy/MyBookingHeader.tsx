import React from "react";
// import SearchAndSelect from "../../SearchAndSelect";
// import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";
import StatusLocation from "../../header/status/StatusLocation";




export default function MyBookingHeader() {
  return (
    <div className="flex w-full items-center justify-around rounded-t-lg bg-emerald-900 p-6 mt-10">
        <div className="font-mono font-thin text-slate-50">
          Meine XX Buchungen in <StatusLocation color="slate" />
        </div>
        {/* <SearchAndSelect
          value={EOfficesEnglishToGerman}
          setValue={(event) => console.log(event)}
          listOfValues={EOfficesEnglishToGerman}
        /> */}
    </div>
  );
}
