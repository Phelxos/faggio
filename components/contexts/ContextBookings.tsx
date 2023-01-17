import React, { useState } from "react";
import TOfficeCity from "../../typings/types/TOfficeCity";
import { initialValueForGloballySelectedOffice } from "../../stores/SOffices";
import IBooking from "../../typings/interfaces/IBooking";

interface Interface {
  isBeingEdited: boolean;
  toggleIsBeingEdited: () => void;
  locallySelectedOfficeName: TOfficeCity;
  setLocallySelectedOfficeName: (office: TOfficeCity) => void;
  bookingsToBeSaved: IBooking[];
  addBookingsToBeSaved: (booking: IBooking) => void;
  saveBookingsToBeSaved: () => void;
  deleteBookingsToBeSaved: () => void;
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
  const [bookingsToBeSaved, setbookingsToBeSaved] = useState<IBooking[]>([]);
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCity>(initialValueForGloballySelectedOffice.city);

  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };
  const addBookingsToBeSaved = (booking: IBooking) => {
    setbookingsToBeSaved([...bookingsToBeSaved, booking]);
  };
  const saveBookingsToBeSaved = () => {};
  const deleteBookingsToBeSaved = () => {
    setbookingsToBeSaved([]);
    setIsBeingEdited(false);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    bookingsToBeSaved,
    addBookingsToBeSaved,
    saveBookingsToBeSaved,
    deleteBookingsToBeSaved,
  };

  return (
    <ContextBookings.Provider value={value}>
      {children}
    </ContextBookings.Provider>
  );
}
