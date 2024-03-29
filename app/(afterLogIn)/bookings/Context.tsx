"use client";

import { FC, createContext, useEffect, useRef, useState } from "react";
import useBookings from "../../../stores/SBookings";
import { initialValueForGloballySelectedOffice } from "../../../stores/SOffices";
import IBooking from "../../../typings/interfaces/IBooking";
import { TOfficeCityEnglish } from "../../../typings/types/TOfficeCity";
import useAccount from "../../../stores/SAccount";
import useToast from "../../../stores/SToast";

interface ContextProps {
  isBeingEdited: boolean;
  toggleIsBeingEdited: () => void;
  locallySelectedOfficeId: number;
  setLocallySelectedOfficeId: (id: number) => void;
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
  previousSuccessfullySavedBookings: number;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const initVal = {
  name: initialValueForGloballySelectedOffice.city,
  id: initialValueForGloballySelectedOffice.officeId,
};

export const Context = createContext<ContextProps | undefined>(undefined);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const isOpenModalOverFullScreen = useAccount((s) => s.isOpenModal);
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
  const [bookingsToBeSaved, setBookingsToBeSaved] = useState<IBooking[]>([]);
  const [bookingsToBeDeleted, setBookingsToBeDeleted] = useState<IBooking[]>(
    []
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [
    previousSuccessfullySavedBookings,
    setPreviousSuccessfullySavedBookings,
  ] = useState<number>(0);
  const [
    previousSuccessfullyDeletedBookings,
    setPreviousSuccessfullyDeletedBookings,
  ] = useState<number>(0);
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCityEnglish>(initVal.name);
  const [locallySelectedOfficeId, setLocallySelectedOfficeId] =
    useState<number>(initVal.id);
  const setBookings = useBookings((s) => s.setBookings);
  const deleteBookings = useBookings((s) => s.deleteBookings);
  const calRef = useRef<HTMLDivElement | null>(null);
  const { showToast } = useToast();

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
          b.officeId !== locallySelectedOfficeId
      )
    );
  };
  const transferBookingsToBeSavedToBookingsToStore = async () => {
    if (!bookingsToBeSaved.length) return;
    const numberOfSavedBookings = await setBookings(bookingsToBeSaved);
    if (typeof numberOfSavedBookings === "number") {
      setPreviousSuccessfullySavedBookings(numberOfSavedBookings);
      showToast({
        title: "Erfolgreich verbucht",
        description: `Du hast ${
          numberOfSavedBookings > 1 ? numberOfSavedBookings : "einen"
        } Bürotag${numberOfSavedBookings > 1 ? "e" : ""} gebucht.`,
        status: "success",
      });
    } else {
      console.error(
        "🚨 The number of succesfully saved bookings could not have been returned in the context of the bookings page."
      );
    }
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
          b.officeId !== locallySelectedOfficeId
      )
    );
  };
  const transferBookingsToBeDeletedToBookingsToStore = async () => {
    if (!bookingsToBeDeleted.length) return;
    const numberOfDeletedBookings = await deleteBookings(bookingsToBeDeleted);
    if (typeof numberOfDeletedBookings === "number") {
      setPreviousSuccessfullyDeletedBookings(numberOfDeletedBookings);
      showToast({
        title: "Erfolgreich entfernt",
        description: `Du hast ${
          numberOfDeletedBookings > 1 ? numberOfDeletedBookings : "einen"
        } Bürotag${
          numberOfDeletedBookings > 1 ? "e" : ""
        } aus deinen Buchungen entfernt.`,
        status: "success",
      });
    } else {
      console.error(
        "🚨 The number of succesfully deleted bookings could not have been returned in the context of the bookings page."
      );
    }
  };
  const toggleIsOpenModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
      setIsBeingEdited(false);
    } else setIsOpenModal(true);
  };

  useEffect(() => {
    if (isOpenModalOverFullScreen) {
      setIsBeingEdited(false);
    }
  }, [isOpenModalOverFullScreen]);

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    locallySelectedOfficeId,
    setLocallySelectedOfficeId,
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
    previousSuccessfullySavedBookings,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
