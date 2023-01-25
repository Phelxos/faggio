import React from "react";
import StatusLocation from "../../header/status/StatusLocation";
import Icon from "../../icons/Icon";

interface Props {
  bookedSlots: any[];
}

export default function MyBooking() {
  const bookedSlots: any[] = [];
  return (
    // {bookedSlots.map((slot) => (
      <div className="flex w-full justify-around rounded-lg bg-emerald-500 p-6 mt-10">
          <div className="flex flex-col">
              <p>datum</p>
              <p>office</p>
              <StatusLocation color="slate" />
          </div>
          <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
              <Icon icon="xMark" className="h-5 w-5 mx-0"/>
          </button>
      </div>
    //   ))
    // }
  )
}
