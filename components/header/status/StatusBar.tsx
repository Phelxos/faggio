import React from "react";
import StatusLocation from "./StatusLocation";
import StatusUser from "./StatusUser";
import useTheme from "../../../hooks/useTheme";

export default function StatusBar() {
  const currentTheme = useTheme();

  return (
    <div
      className={`flex items-center justify-between bg-${currentTheme}-700 p-2 text-xs`}
    >
      <StatusUser />
      <StatusLocation />
    </div>
  );
}
