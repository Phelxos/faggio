import React, { useState } from "react";

interface Interface {
  isBeingEdited: boolean;
  datesToBeSaved: Date[];
  toggleIsBeingEdited: () => void;
  addDateToBeSaved: (date: Date) => void;
  deleteDatesToBeSaved: () => void;
}

export const ContextTeams = React.createContext<Interface | undefined>(
  undefined
);

export default function ContextTeamsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false);
  const [datesToBeSaved, setDatesToBeSaved] = useState<Date[]>([]);

  const toggleIsBeingEdited = () => {
    setIsBeingEdited(!isBeingEdited);
  };
  const addDateToBeSaved = (date: Date) => {
    setDatesToBeSaved([...datesToBeSaved, date]);
  };
  const deleteDatesToBeSaved = () => {
    setDatesToBeSaved([]);
  };

  const value = {
    isBeingEdited,
    toggleIsBeingEdited,
    datesToBeSaved,
    addDateToBeSaved,
    deleteDatesToBeSaved,
  };

  return (
    <ContextTeams.Provider value={value}>{children}</ContextTeams.Provider>
  );
}
