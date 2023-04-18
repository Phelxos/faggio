import React, { useState, useRef } from "react";
import { TOfficeCityEnglish } from "../../typings/types/TOfficeCity";
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
  calRef: React.RefObject<HTMLDivElement> | null;
  isOpenModal: boolean;
  toggleIsOpenModal: () => void;
}

const initVal = initialValueForGloballySelectedOffice.city;

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCityEnglish>(initVal);
  const setBookings = useBookings((s) => s.setBookings);
  const deleteBookings = useBookings((s) => s.deleteBookings);
  const calRef = useRef<HTMLDivElement | null>(null);

  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };
  const setBookingsToBeSavedTMP = (booking: IBooking) => {
    setBookingsToBeSaved([...bookingsToBeSaved, booking]);
  };
  const deleteBookingsToBeSaved = (date: Date) => {
    setBookingsToBeSaved(
      bookingsToBeSaved.filter(
        (b: IBooking) =>
          (b.date as Date).toJSON() !== date.toJSON() ||
          b.office !== locallySelectedOfficeName
      )
    );
  };
  const transferBookingsToBeSavedToBookingsToStore = () => {
    if (!bookingsToBeSaved.length) return;
    setBookings(bookingsToBeSaved);
  };
  const clearBookingsToBeSavedAndDeleted = () => {
    setBookingsToBeSaved([]);
    setBookingsToBeDeleted([]);
  };
  const setBookingsToBeDeletedTMP = (booking: IBooking) => {
    setBookingsToBeDeleted([...bookingsToBeDeleted, booking]);
  };
  const deleteBookingsToBeDeleted = (date: Date) => {
    setBookingsToBeDeleted(
      bookingsToBeDeleted.filter(
        (b: IBooking) =>
          (b.date as Date).toJSON() !== date.toJSON() ||
          b.office !== locallySelectedOfficeName
      )
    );
  };
  const transferBookingsToBeDeletedToBookingsToStore = () => {
    if (!bookingsToBeDeleted.length) return;
    deleteBookings(bookingsToBeDeleted);
  };
  const toggleIsOpenModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
      setIsBeingEdited(false);
    } else setIsOpenModal(true);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    bookingsToBeSaved,
    setBookingsToBeSaved: setBookingsToBeSavedTMP,
    deleteBookingsToBeSaved,
    transferBookingsToBeSavedToBookingsToStore,
    clearBookingsToBeSavedAndDeleted,
    bookingsToBeDeleted,
    setBookingsToBeDeleted: setBookingsToBeDeletedTMP,
    deleteBookingsToBeDeleted,
    transferBookingsToBeDeletedToBookingsToStore,
    calRef,
    isOpenModal,
    toggleIsOpenModal,
  };

  return <CBookings.Provider value={value}>{children}</CBookings.Provider>;
}
