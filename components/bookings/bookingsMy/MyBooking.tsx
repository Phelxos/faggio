import React, { useContext, useState, useEffect } from "react";
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
    weekday: "long",
  };

  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    deleteBookings(toBeDeleted);
  };

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);

  return (
    <>
      {bookings.map((booking: IBooking) => (
        <div
          key={Math.random()}
          className="mt-10 flex w-full justify-around rounded-lg bg-emerald-500 p-6"
        >
          <div className="flex flex-col">
            <p>{new Date(booking.date).toLocaleDateString()}</p>
            <p>{booking.office}</p>
          </div>
          <button
            className="rounded-full bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-400"
            onClick={() => handleDeleteButton([booking])}
          >
            <Icon icon="xMark" className="mx-0 h-5 w-5" />
          </button>
        </div>
      ))}
    </>
  );
}
