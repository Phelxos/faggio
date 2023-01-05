import React, { useState } from "react";
import TDisplay from "../../typings/types/TDisplay";
import TLocation from "../../typings/types/TLocation";
import TActiveButton from "../../typings/types/TActiveButton";

interface Interface {
  searchForUser: string;
  setSearchForUser: (e: string) => void;
  viewOfUsers: TDisplay;
  setViewOfUsers: (e: TDisplay) => void;
  displayedOffice: TLocation;
  setDisplayedOffice: (e: TLocation) => void;
  activeButton: TActiveButton;
  setActiveButton: (e: TActiveButton) => void;
  isListView: boolean;
  setIsListView: (e: any) => void;
}

export const ContextTeams = React.createContext<Interface | undefined>(
  undefined
);

export default function ContextTeamsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [searchForUser, setSearchForUser] = useState<string>("");
  const [viewOfUsers, setViewOfUsers] = useState<TDisplay>("gallery");
  const [displayedOffice, setDisplayedOffice] = useState<TLocation>("dortmund");
  const [activeButton, setActiveButton] = useState<TActiveButton>("right");
  const [isListView, setIsListView] = useState<boolean>(false);

  const value = {
    searchForUser,
    setSearchForUser,
    viewOfUsers,
    setViewOfUsers,
    displayedOffice,
    setDisplayedOffice,
    activeButton,
    setActiveButton,
    isListView,
    setIsListView,
  };
  return (
    <ContextTeams.Provider value={value}>{children}</ContextTeams.Provider>
  );
}
