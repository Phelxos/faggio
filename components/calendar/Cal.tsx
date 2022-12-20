import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";

export default function Calendar() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded p-4 text-emerald-400">
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
  );
}
