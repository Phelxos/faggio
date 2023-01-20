import React from "react";
// import SearchAndSelect from "../../SearchAndSelect";
// import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";
import StatusLocation from "../../header/status/StatusLocation";
import Icon from "../../icons/Icon";



export default function MyBooking() {
  return (
    <div className="flex w-full justify-around rounded-lg bg-emerald-500 p-6 mt-10">
        <div className="flex flex-col">
            <p>Datum</p>
            <StatusLocation color="slate" />
        </div>
        <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
            <Icon icon="x-mark" className="h-5 w-5 mx-0"/>
        </button>
    </div>
  );
}
