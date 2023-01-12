import React, { useState } from "react";
import NavBar from "./header/nav/NavBar";
import StatusBar from "./header/status/StatusBar";

export default function Header() {
  return (
    <header>
      <StatusBar />
      <NavBar />
    </header>
  );
}
