import React from "react";
import { useContext } from "react";
import { CTeams } from "../contexts/CTeams";
import { Switch } from "@headlessui/react";

export default function TeamsControlsBarSwitch() {
  const c = useContext(CTeams);

  const handleCheckboxChange = (e: any) => {
    c?.setIsListView((prevVal: boolean) => !prevVal);
  };

  return (
    <div className="flex h-full w-full items-center justify-around p-6">
      <Switch.Group>
        <Switch
          checked={c?.isListView}
          onChange={handleCheckboxChange}
          className={`${c?.isListView ? "bg-pink-200" : "bg-slate-900"}
          peer relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${c?.isListView ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-pink-700 shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <Switch.Label
          passive
          className={`${
            c?.isListView
              ? "font-pink-200 font-bold"
              : "font-pink-800 font-light"
          } mr-2 flex h-full w-full flex-col items-end justify-center text-xl tracking-widest`}
        >
          Listenansicht
        </Switch.Label>
      </Switch.Group>
    </div>
  );
}
