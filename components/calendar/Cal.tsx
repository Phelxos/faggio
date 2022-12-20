import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";

export default function Calendar() {
  return (
    <div className="flex h-[550px] h-full w-[340px] w-full flex-col rounded-lg bg-emerald-600 sm:h-[600px] sm:w-[600px]">
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
  );
}
