import React, { useState } from "react";
import TDisplay from "../../typings/types/TDisplay";
import TActiveButton from "../../typings/types/TActiveButton";
import { initialValueForGloballySelectedOffice } from "../../stores/SOffices";

interface Interface {
  searchForUser: string;
  setSearchForUser: (e: string) => void;
  viewOfUsers: TDisplay;
  setViewOfUsers: (e: TDisplay) => void;
  locallySelectedOfficeId: number;
  setLocallySelectedOfficeId: (e: number) => void;
  activeButton: TActiveButton;
  setActiveButton: (e: TActiveButton) => void;
  isListView: boolean;
  setIsListView: (e: any) => void;
}

export const CTeams = React.createContext<Interface | undefined>(undefined);

export default function ContextTeamsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [searchForUser, setSearchForUser] = useState<string>("");
  const [viewOfUsers, setViewOfUsers] = useState<TDisplay>("gallery");
  const [locallySelectedOfficeId, setLocallySelectedOfficeId] =
    useState<number>(initialValueForGloballySelectedOffice.officeId);
  const [activeButton, setActiveButton] = useState<TActiveButton>("right");
  const [isListView, setIsListView] = useState<boolean>(false);

  const value = {
    searchForUser,
    setSearchForUser,
    viewOfUsers,
    setViewOfUsers,
    locallySelectedOfficeId,
    setLocallySelectedOfficeId,
    activeButton,
    setActiveButton,
    isListView,
    setIsListView,
  };
  return <CTeams.Provider value={value}>{children}</CTeams.Provider>;
}
