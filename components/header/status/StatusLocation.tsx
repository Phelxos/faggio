import React from "react";
import useOffice from "../../../stores/SOffices";

export default function StatusLocation() {
  const displayedOffice = useOffice((s) => s.displayedOffice);
  return <div>StatusLocation</div>;
}
