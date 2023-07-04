import React from "react";
import Cal from "../app/bookings/components/calendar/Calendar";
import CalEditControl from "../app/bookings/components/control/Control";
import BookingsMy from "../components/bookings/bookingsMy/BookingsMy";
import BookingsOther from "../components/bookings/bookingsOther/BookingsOther";
import ContextBookingsProvider from "../components/contexts/CBookings";

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
