import React from "react";
import { useContext } from "react";
import { ContextTeams } from "../contexts/ContextTeams";

export default function TeamsControlsBarSwitch() {
  const context = useContext(ContextTeams);

  const handleCheckboxChange = (e: any) => {
    context?.setIsListView((prevVal: boolean) => !prevVal);
  };

  return (
    <label className="relative inline-flex h-full w-full cursor-pointer items-center rounded-lg bg-pink-500 py-2 px-4">
      <input
        type="checkbox"
        checked={context?.isListView}
        value={context?.isListView}
        className="peer sr-only"
        onChange={handleCheckboxChange}
      />
      <div className="h-12 w-24 rounded-full bg-slate-700 shadow-inner  after:absolute after:top-4 after:left-4 after:-mt-[1px] after:h-12 after:w-12 after:rounded-full after:border after:border-pink-200 after:bg-pink-300 after:shadow-lg after:transition-all after:content-[''] peer-checked:bg-pink-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-pink-200" />
      <span className="ml-6 text-2xl font-medium tracking-widest text-pink-200 opacity-50 peer-checked:opacity-100">
        Listenansicht
      </span>
    </label>
  );
}
