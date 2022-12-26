import React, { useState, useContext, useEffect } from "react";
import TActiveButton from "../typings/types/TActiveButton";
import TIcon from "../typings/types/TIcon";
import { ContextTeams } from "./contexts/ContextTeams";
import Button from "./TeamsControlsBarButton";

export default function ControlsBar() {
  const context = useContext(ContextTeams);

  const handleUserSearchInput = (e: any) => {
    if (e.target.value.length > 30) return;
    context?.setSearchForUser(e.target.value);
  };

  const handleIconButtonClick = (button: TActiveButton) => {
    context?.setActiveButton(button);
  };

  const icons: { left: TIcon; center: TIcon; right: TIcon } = {
    left: "listBullet",
    center: "buildingOffice",
    right: "magnifiyingGlass",
  };

  useEffect(() => {}, [context?.activeButton]);

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
        <Button
          icon={icons.left}
          isActiveButton={context?.activeButton === "left"}
          onClick={() => handleIconButtonClick("left")}
        />
        <Button
          icon={icons.center}
          isActiveButton={context?.activeButton === "center"}
          onClick={() => handleIconButtonClick("center")}
        />
        <Button
          icon={icons.right}
          isActiveButton={context?.activeButton === "right"}
          onClick={() => handleIconButtonClick("right")}
        />
      </div>
    </div>
  );
}
