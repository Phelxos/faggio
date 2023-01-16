import React, { useState } from "react";

interface Interface {}

export const ContextTeams = React.createContext<Interface | undefined>(
  undefined
);

export default function ContextTeamsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const value = {};
  return (
    <ContextTeams.Provider value={value}>{children}</ContextTeams.Provider>
  );
}
