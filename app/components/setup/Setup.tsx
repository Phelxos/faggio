"use client";

import { FC } from "react";
import useSetupData from "../../../hooks/useSetupData";
import IncorrectSizeMessage from "./IncorrectSizeMessage";
// import "../styles/globals.scss";

interface Props {
  children: React.ReactNode;
}

const Setup: FC<Props> = ({ children }) => {
  const { isHydrated } = useSetupData();
  
  if (isHydrated) {
    return <>{children}</>;
  }

  return null;
};

export default Setup;
