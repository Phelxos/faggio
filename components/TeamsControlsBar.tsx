import React, { useContext } from "react";
import TIcon from "../typings/types/TIcon";
import Icon from "./icons/Icon";
import { ContextTeams } from "./contexts/ContextTeams";

export default function ControlsBar() {
  const context = useContext(ContextTeams);
  const handleUserSearchInput = (e: any) => {
    if (e.target.value.length > 30) return;
    context?.setSearchForUser(e.target.value);
  };

  const icons: { left: TIcon; center: TIcon; right: TIcon } = {
    left: "listBullet",
    center: "buildingOffice",
    right: "magnifiyingGlass",
  };

  return (
    <div className="flex w-full flex-col items-stretch rounded bg-slate-600">
      {context?.activeButton === "right" ? (
        <input
          className="out m-4 h-[100px] grow rounded border-4 border-pink-400 bg-pink-300 px-4 text-4xl uppercase tracking-widest text-pink-900 caret-pink-900 opacity-75 outline-none focus:opacity-100"
          onInput={handleUserSearchInput}
          value={context?.searchForUser}
        />
      ) : (
        <></>
      )}

      <div className="flex w-full items-center justify-between gap-8 p-4">
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon={icons.left}
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon={icons.center}
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon={icons.right}
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
}
