import React, { useState } from "react";
import TDisplay from "../../typings/types/TDisplay";
import TOfficeCity from "../../typings/types/TOfficeCity";
import TActiveButton from "../../typings/types/TActiveButton";

interface Interface {
  searchForUser: string;
  setSearchForUser: (e: string) => void;
  viewOfUsers: TDisplay;
  setViewOfUsers: (e: TDisplay) => void;
  locallySelectedOfficeName: TOfficeCity;
  setLocallySelectedOfficeName: (e: TOfficeCity) => void;
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
  const [locallySelectedOfficeName, setLocallySelectedOfficeName] =
    useState<TOfficeCity>("dortmund");
  const [activeButton, setActiveButton] = useState<TActiveButton>("right");
  const [isListView, setIsListView] = useState<boolean>(false);

  const value = {
    searchForUser,
    setSearchForUser,
    viewOfUsers,
    setViewOfUsers,
    locallySelectedOfficeName,
    setLocallySelectedOfficeName,
    activeButton,
    setActiveButton,
    isListView,
    setIsListView,
  };
  return (
    <ContextTeams.Provider value={value}>{children}</ContextTeams.Provider>
  );
}
