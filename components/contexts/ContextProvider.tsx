import React from "react";
import ContextTeamsProvider from "./ContextTeams";

export default function ContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  return <ContextTeamsProvider>{children}</ContextTeamsProvider>;
}
