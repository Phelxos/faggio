import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";
import CalEditControls from "./CalEditControls";

export default function Calendar() {
  return (
    <div className="flex h-[475px] w-full flex-col rounded-lg bg-emerald-600 sm:h-[600px] sm:w-[600px]">
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
  );
}
