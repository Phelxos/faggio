import React from "react";
import ContextTeamsProvider from "./CTeams";

export default function ContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  return <ContextTeamsProvider>{children}</ContextTeamsProvider>;
}
