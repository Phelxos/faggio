import React from "react";
import CalHead from "./CalHead";
import CalBody from "./CalBody";

export default function Calendar() {
  return (
    <div className="flex h-full flex-col rounded text-slate-400">
      <CalHead />;
      <CalBody />
    </div>
  );
}
