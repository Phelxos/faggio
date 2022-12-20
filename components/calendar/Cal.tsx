import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";

export default function Calendar() {
  return (
    <div className="flex h-full flex-col rounded text-slate-400">
      <CalHeader />;
      <CalBody />
      <CalFooter />
    </div>
  );
}
