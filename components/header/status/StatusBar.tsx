import React from "react";
import StatusLocation from "./StatusLocation";
import StatusUser from "./StatusUser";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-slate-700 py-1 px-3 text-xs">
      <StatusUser />
      <StatusLocation />
    </div>
  );
}
