"use client";

import { FC } from "react";
import { useContext } from "react";
import { CTeams } from "../../../Context";
import { Switch } from "@headlessui/react";

const MySwitch: FC = () => {
  const c = useContext(CTeams);

  const handleCheckboxChange = (e: any) => {
    c?.setIsListView((prevVal: boolean) => !prevVal);
  };

  return (
    <div className="flex h-full w-full items-center justify-around p-5">
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
            c?.isListView ? "text-pink-200" : " text-pink-900/50"
          } flex h-full w-full flex-col items-end justify-center text-xl font-bold tracking-widest transition duration-200 ease-in-out`}
        >
          Listenansicht
        </Switch.Label>
      </Switch.Group>
    </div>
  );
};

export default MySwitch;
