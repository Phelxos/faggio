import React from "react";
import { useContext } from "react";
import { CTeams } from "../contexts/CTeams";

export default function TeamsControlsBarSwitch() {
  const c = useContext(CTeams);

  const handleCheckboxChange = (e: any) => {
    c?.setIsListView((prevVal: boolean) => !prevVal);
  };

  return (
    <label className="flex inline-flex h-full w-full cursor-pointer items-center justify-between rounded-lg bg-pink-500 py-2 px-4">
      <div className="relative h-10 w-20">
        <input
          type="checkbox"
          checked={c?.isListView}
          className="peer sr-only h-full w-full"
          onChange={handleCheckboxChange}
        />
        <div className="h-full w-full rounded-full bg-slate-700 shadow-inner after:absolute after:top-0 after:left-0 after:h-[40px] after:w-[40px] after:rounded-full after:bg-pink-200 after:shadow-lg after:transition-all after:content-[''] peer-checked:bg-pink-700 peer-checked:after:translate-x-10 peer-focus:ring-4 peer-focus:ring-pink-200" />
      </div>
      <span className="ml-6 font-bold tracking-widest text-slate-700 peer-checked:text-pink-800">
        Listenansicht
      </span>
    </label>
  );
}
