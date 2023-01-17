import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";

export default function Calendar() {
  return (
    <div className="flex h-[480px] w-full flex-col rounded-lg bg-slate-700">
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
  );
}
