import React from "react";
import Spinner from "./Spinner";

export default function SpinnerWrapped() {
  return (
    <div className="flex w-full grow flex-col items-center justify-center">
      <Spinner />
    </div>
  );
}
