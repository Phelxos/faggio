"use client";

import React, { FC, createContext, useState } from "react";
import { initialValueForGloballySelectedOffice } from "../../../stores/SOffices";
import TActiveButton from "../../../typings/types/TActiveButton";
import TDisplay from "../../../typings/types/TDisplay";

interface ContextProps {
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

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
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
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
