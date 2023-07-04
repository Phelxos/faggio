import React from "react";
import Cal from "../app/(pages)/bookings/components/calendar/Calendar";
import CalEditControl from "../app/(pages)/bookings/components/control/Control";
import BookingsMy from "../app/(pages)/bookings/components/bookings-my/MyBookings";
import BookingsOther from "../app/(pages)/bookings/components/bookings-other/OtherBookings";
import ContextBookingsProvider from "../components/contexts/BookingsContext";

export default function Bookings() {
  return (
    <ContextBookingsProvider>
      <>
        <Cal />
        <CalEditControl />
        <BookingsMy />
        <BookingsOther />
      </>
    </ContextBookingsProvider>
  );
}
