import React from "react";
import Icon from "./icons/Icon";

export default function ControlsBar() {
  return (
    <div className="flex w-full flex-col items-stretch rounded bg-slate-600">
      <input className="out m-4 h-[100px] grow rounded border-4 border-pink-400 bg-pink-300 px-8 text-4xl uppercase tracking-widest text-pink-900 caret-pink-900 opacity-75 outline-none focus:opacity-100" />
      <div className="flex w-full items-center justify-between gap-8 p-4">
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon="listBullet"
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon="buildingOffice"
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
        <button className="item-center jusftify-center flex grow flex-col">
          <Icon
            icon="magnifiyingGlass"
            className="h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
}
