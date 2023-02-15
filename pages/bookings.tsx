import React, { useEffect, useRef } from "react";
import Cal from "../components/bookings/bookingsCal/Cal";
import CalEditControl from "../components/bookings/bookingsCal/bookingsCalEditControl/CalEditControl";
import BookingsOther from "../components/bookings/bookingsOther/BookingsOther";
import ContextBookingsProvider from "../components/contexts/CBookings";

export default function Bookings() {
  const cal = useRef<HTMLDivElement | null>(null);
  return (
    <ContextBookingsProvider>
      <>
        <Cal />
        <CalEditControl />
        <BookingsOther />
      </>
    </ContextBookingsProvider>
  );
}
