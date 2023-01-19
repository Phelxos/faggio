import React, { useState } from "react";
import TOfficeCityEnglish from "../../typings/types/TOfficeCity";
import { initialValueForGloballySelectedOffice } from "../../stores/SOffices";
import IBooking from "../../typings/interfaces/IBooking";
import useBookings from "../../stores/SBookings";

interface Interface {
  isBeingEdited: boolean;
  toggleIsBeingEdited: () => void;
  locallySelectedOfficeName: TOfficeCityEnglish;
  setLocallySelectedOfficeName: (office: TOfficeCityEnglish) => void;
  bookingsToBeSaved: IBooking[];
  setBookingsToBeSaved: (booking: IBooking) => void;
  deleteBookingsToBeSaved: (date: Date) => void;
  transferBookingsToBeSavedToBookingsToStore: () => void;
  clearBookingsToBeSavedAndDeleted: () => void;
  bookingsToBeDeleted: IBooking[];
  setBookingsToBeDeleted: (booking: IBooking) => void;
  deleteBookingsToBeDeleted: (date: Date) => void;
  transferBookingsToBeDeletedToBookingsToStore: () => void;
}

export const CBookings = React.createContext<Interface | undefined>(undefined);

export default function ContextBookingsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
  const [bookingsToBeSaved, setBookingsToBeSaved] = useState<IBooking[]>([]);
  const [bookingsToBeDeleted, setBookingsToBeDeleted] = useState<IBooking[]>(
    []
  );
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCityEnglish>(initialValueForGloballySelectedOffice.city);
  const setBookings = useBookings((s) => s.setBookings);
  const deleteBookings = useBookings((s) => s.deleteBookings);

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
          +b.date !== +date || b.office !== locallySelectedOfficeName
      )
    );
  };
  const transferBookingsToBeSavedToBookingsToStore = () => {
    setBookings(bookingsToBeSaved);
  };
  const clearBookingsToBeSavedAndDeleted = () => {
    setBookingsToBeSaved([]);
    setBookingsToBeDeleted([]);
  };
  const setBookingsToBeDeletedTEMP = (booking: IBooking) => {
    setBookingsToBeDeleted([...bookingsToBeDeleted, booking]);
  };
  const deleteBookingsToBeDeleted = (date: Date) => {
    setBookingsToBeDeleted(
      bookingsToBeDeleted.filter(
        (b: IBooking) =>
          +b.date !== +date || b.office !== locallySelectedOfficeName
      )
    );
  };
  const transferBookingsToBeDeletedToBookingsToStore = () => {
    deleteBookings(bookingsToBeDeleted);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    bookingsToBeSaved,
    setBookingsToBeSaved: setBookingsToBeSavedTEMP,
    deleteBookingsToBeSaved,
    transferBookingsToBeSavedToBookingsToStore,
    clearBookingsToBeSavedAndDeleted,
    bookingsToBeDeleted,
    setBookingsToBeDeleted: setBookingsToBeDeletedTEMP,
    deleteBookingsToBeDeleted,
    transferBookingsToBeDeletedToBookingsToStore,
  };

  return <CBookings.Provider value={value}>{children}</CBookings.Provider>;
}
