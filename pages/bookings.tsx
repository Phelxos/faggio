import React, { useEffect } from "react";
import Cal from "../components/bookings/bookingsCal/Cal";
import CalEditControls from "../components/bookings/bookingsCal/CalEditControls";
import BookingsOther from "../components/bookings/bookingsOther/BookingsOther";
import ContextBookingsProvider from "../components/contexts/CBookings";

export default function Bookings() {
  useEffect(() => {}, []);
  return (
    <ContextBookingsProvider>
      <>
        <Cal />
        <CalEditControls />
        <BookingsOther />
      </>
    </ContextBookingsProvider>
  );
}
