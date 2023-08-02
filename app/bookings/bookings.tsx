import React from "react";
import Cal from "../../components/bookings/bookingsCal/Cal";
import CalEditControl from "../../components/bookings/bookingsCal/CalEditControl/CalEditControl";
import BookingsMy from "../../components/bookings/bookingsMy/BookingsMy";
import BookingsOther from "../../components/bookings/bookingsOther/BookingsOther";
import ContextBookingsProvider from "../../components/contexts/CBookings";

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
