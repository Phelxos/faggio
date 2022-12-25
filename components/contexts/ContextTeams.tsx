import React, { useState } from "react";
import IColleague from "../../typings/interfaces/IColleague";
import TDisplay from "../../typings/types/TDisplay";
import TLocation from "../../typings/types/TLocation";

type TActiveButton = "left" | "center" | "right";

interface Interface {
  searchForUser: string;
  setSearchForUser: (e: string) => void;
  viewOfUsers: TDisplay;
  setViewOfUsers: (e: TDisplay) => void;
  displayedOffice: TLocation;
  setDisplayedOffice: (e: TLocation) => void;
  activeButton: TActiveButton;
  setActiveButton: (e: TActiveButton) => void;
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
  const [displayedOffice, setDisplayedOffice] = useState<TLocation>("Dortmund");
  const [activeButton, setActiveButton] = useState<TActiveButton>("right");

  const value = {
    searchForUser,
    setSearchForUser,
    viewOfUsers,
    setViewOfUsers,
    displayedOffice,
    setDisplayedOffice,
    activeButton,
    setActiveButton,
  };
  return (
    <ContextTeams.Provider value={value}>{children}</ContextTeams.Provider>
  );
}
