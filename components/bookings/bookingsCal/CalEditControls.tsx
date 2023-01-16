import React from "react";
import Icon from "../../icons/Icon";

function ButtonPlus() {
  return (
    <button className="flex flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-700 active:translate-y-0.5 active:drop-shadow-md">
      <Icon icon="plus" className="h-16 w-16 fill-sky-700 p-2" />
    </button>
  );
}

function ButtonCheck() {
  return (
    <button className="flex flex-col items-center justify-center rounded-full border-4 border-emerald-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 to-green-500 drop-shadow-xl duration-200 ease-in-out hover:border-emerald-700 active:translate-y-0.5 active:drop-shadow-md">
      <Icon icon="check" className="h-16 w-16 fill-emerald-700 p-2" />
    </button>
  );
}

function ButtonXMark() {
  return (
    <button className="flex flex-col items-center justify-center rounded-full border-4 border-rose-300/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-400 to-red-800 drop-shadow-xl duration-200 ease-in-out hover:border-rose-400 active:translate-y-0.5 active:drop-shadow-md">
      <Icon icon="xMark" className="h-16 w-16 fill-rose-300 p-2" />
    </button>
  );
}

export default function CalEditControls() {
  return (
    <div className="fixed right-0 bottom-0 flex items-center justify-end gap-4 p-4">
      <ButtonPlus />
      <ButtonCheck />
      <ButtonXMark />
    </div>
  );
}
