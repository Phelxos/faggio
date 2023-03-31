import React, { useContext, useState, useEffect } from "react";
import Icon from "../../icons/Icon";
import useBookings from "../../../stores/SBookings";
import BookingsMyHeader from "./BookingsMyHeader";
import IBooking from "../../../typings/interfaces/IBooking";
import { CBookings } from "../../contexts/CBookings";

export default function BookingsMy() {
  let bookings = useBookings((s) => s.bookings);
  const c = useContext(CBookings);
  let deleteBookings = useBookings((s) => s.deleteBookings);

  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    deleteBookings(toBeDeleted);
  };

  return (
    <>
      <BookingsMyHeader />
      <div className="w-full divide-y divide-emerald-900">
        {bookings
          .filter(
            (booking: IBooking) =>
              booking.office === c?.locallySelectedOfficeName
          )
          .map((booking: IBooking) => (
            <div
              key={Math.random()}
              className="flex w-full justify-between bg-emerald-500 p-6 px-20 last:rounded-b-lg"
            >
              <div className="flex flex-col">
                <p>
                  {new Date(booking.date).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "long",
                  })}
                </p>
                <p>
                  {booking.office[0].toUpperCase() +
                    booking.office.substring(1)}
                </p>
              </div>
              <button
                className="rounded-full bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-400"
                onClick={() => handleDeleteButton([booking])}
              >
                <Icon icon="xMark" className="mx-0 h-5 w-5" />
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
