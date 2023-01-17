import React, { useState } from "react";
import TOfficeCity from "../../typings/types/TOfficeCity";
import { initialValueForGloballySelectedOffice } from "../../stores/SOffices";
import IBooking from "../../typings/interfaces/IBooking";
import useBookings from "../../stores/SBookings";

interface Interface {
  isBeingEdited: boolean;
  toggleIsBeingEdited: () => void;
  locallySelectedOfficeName: TOfficeCity;
  setLocallySelectedOfficeName: (office: TOfficeCity) => void;
  bookingsToBeSaved: IBooking[];
  setBookingsToBeSaved: (booking: IBooking) => void;
  deleteBookingsToBeSaved: (date: Date) => void;
  transferBookingsToBeSavedToBookingsInStore: () => void;
  clearBookingsToBeSaved: () => void;
}

export const ContextBookings = React.createContext<Interface | undefined>(
  undefined
);

export default function ContextBookingsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
  const [bookingsToBeSaved, setBookingsToBeSaved] = useState<IBooking[]>([]);
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCity>(initialValueForGloballySelectedOffice.city);
  const setBookings = useBookings((s) => s.setBookings);

  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };
  const setBookingsToBeSavedTEMP = (booking: IBooking) => {
    setBookingsToBeSaved([...bookingsToBeSaved, booking]);
  };
  const deleteBookingsToBeSaved = (date: Date) => {
    setBookingsToBeSaved(
      bookingsToBeSaved.filter(
        (b: IBooking) =>
          +b.date !== +date && b.office !== locallySelectedOfficeName
      )
    );
  };
  const transferBookingsToBeSavedToBookingsInStore = () => {
    setBookings(bookingsToBeSaved);
    setIsBeingEdited(false);
  };
  const clearBookingsToBeSaved = () => {
    setBookingsToBeSaved([]);
    setIsBeingEdited(false);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    bookingsToBeSaved,
    setBookingsToBeSaved: setBookingsToBeSavedTEMP,
    deleteBookingsToBeSaved,
    transferBookingsToBeSavedToBookingsInStore,
    clearBookingsToBeSaved,
  };

  return (
    <ContextBookings.Provider value={value}>
      {children}
    </ContextBookings.Provider>
  );
}
