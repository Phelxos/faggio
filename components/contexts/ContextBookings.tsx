import React, { useState } from "react";
import TOfficeCity from "../../typings/types/TOfficeCity";
import { initialValueForGloballySelectedOffice } from "../../stores/SOffices";

interface Interface {
  isBeingEdited: boolean;
  toggleIsBeingEdited: () => void;
  locallySelectedOfficeName: TOfficeCity;
  setLocallySelectedOfficeName: (office: TOfficeCity) => void;
  datesToBeSaved: Date[];
  addDateToBeSaved: (date: Date) => void;
  saveDatesToBeSaved: () => void;
  deleteDatesToBeSaved: () => void;
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
  const [datesToBeSaved, setDatesToBeSaved] = useState<Date[]>([]);
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCity>(initialValueForGloballySelectedOffice.city);

  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };
  const addDateToBeSaved = (date: Date) => {
    setDatesToBeSaved([...datesToBeSaved, date]);
  };
  const saveDatesToBeSaved = () => {};
  const deleteDatesToBeSaved = () => {
    setDatesToBeSaved([]);
    setIsBeingEdited(false);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    datesToBeSaved,
    addDateToBeSaved,
    saveDatesToBeSaved,
    deleteDatesToBeSaved,
  };

  return (
    <ContextBookings.Provider value={value}>
      {children}
    </ContextBookings.Provider>
  );
}
