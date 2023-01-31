import React, { useContext, useState } from "react";
import Icon from "../../icons/Icon";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import { CBookings } from "../../contexts/CBookings";


export default function MyBooking() {
  let bookings = useBookings((s) => s.bookings);
  let deleteBookings = useBookings((s) => s.deleteBookings);
  let filteredBookings: IBooking[];
  console.log(bookings);

  const c = useContext(CBookings);


  // -----> Delete all Bookings <-----
  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    // filteredBookings = bookings.filter(booking => booking.date.toString() !== "Wed Jan 18 2023 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)" )
    // console.log(filteredBookings);
    deleteBookings(toBeDeleted)
  }
  /** NOTES
   * String mit Wed Jan 18 sollte eigentlich key/id sein
   * Was ist key/ id von der Liste? Muss dann der Funktion übergeben werden
   * filteredBookings: Array, welches die NICHT zu löschenden Objekte enthält
   * sodass filteredBookings dann gemappt (.map) werden müsste
   * TypeScript Fehler: "Variable 'filteredBookings' is used before being assigned."
   * obwohl oben schon deklariert
   * 
   * deleteBookings aus Store: 
   * --> was ist bookingToBeRemovedPotentially?
   * --> beim Löschen muss er sich ja an einem index oder key orientieren und nicht Datum und Büro gegen ein anderes Datum und Büro vergleichen?
   */
  


  return (
    // <div className="font-mono font-thin text-slate-50 mb-5">helloo</div>
    <>
      {bookings.map((fBooking: IBooking) => (
        <div key={Math.random()} className="flex w-full justify-around rounded-lg bg-emerald-500 p-6 mt-10">
          <div className="flex flex-col">
              <p>{fBooking.date.toString()}</p>
              <p>{fBooking.office}</p>
              {/* <StatusLocation color="slate" /> */}
          </div>
          <button 
            className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full" 
            onClick={() => handleDeleteButton([fBooking])}>
              <Icon icon="xMark" className="h-5 w-5 mx-0"/>
          </button>
        </div>
      ))}    
    </>

  );
}
