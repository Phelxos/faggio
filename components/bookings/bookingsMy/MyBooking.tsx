import React, { useContext, useState } from "react";
import Icon from "../../icons/Icon";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import { CBookings } from "../../contexts/CBookings";


export default function MyBooking() {
  // bookings: weiterhin JSON
  let bookings = useBookings((s) => s.bookings);
  let deleteBookings = useBookings((s) => s.deleteBookings);
  let dateOptions = {
    year: "numeric", 
    month: "long", 
    day: "numeric", 
    weekday: "long"
  }
  console.log(bookings);
  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    deleteBookings(toBeDeleted);
  }

  return (
    <>
      {bookings.map((booking: IBooking) => (
        <div key={Math.random()} className="flex w-full justify-around rounded-lg bg-emerald-500 p-6 mt-10">
          <div className="flex flex-col">
              <p>{new Date(booking.date).toLocaleDateString()}</p>
              <p>{booking.office}</p>
          </div>
          <button 
            className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full" 
            onClick={() => handleDeleteButton([booking])}>
              <Icon icon="xMark" className="h-5 w-5 mx-0"/>
          </button>
        </div>
      ))}    
    </>
  );
}
