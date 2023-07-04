"use client";

import Location from "./elements/Location";
import User from "./elements/User";
import useTheme from "../../../../../hooks/useTheme";
import { FC } from "react";

const Status: FC = () => {
  const currentTheme = useTheme();

  return (
    <div
      className={`flex items-center justify-between bg-${currentTheme}-700 p-2 text-xs`}
    >
      <User />
      <Location />
    </div>
  );
};

export default Status;
