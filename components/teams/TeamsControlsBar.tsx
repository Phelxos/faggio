import React, { useState, useContext, useEffect } from "react";
import TActiveButton from "../../typings/types/TActiveButton";
import TIcon from "../../typings/types/TIcon";
import { CTeams } from "../contexts/CTeams";
import Button from "./TeamsControlsBarButton";
import Input from "./TeamsControlsBarInput";
import Switch from "./TeamsControlsBarSwitch";
import SearchAndSelect from "../SearchAndSelect";
import useOffice from "../../stores/SOffices";

export default function ControlsBar() {
  const context = useContext(CTeams);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);

  const handleUserSearchInput = (e: any) => {
    if (e.target.value.length > 30) return;
    context?.setSearchForUser(e.target.value.toLowerCase());
  };

  const handleIconButtonClick = (button: TActiveButton) => {
    context?.setActiveButton(button);
  };

  const icons: { left: TIcon; center: TIcon; right: TIcon } = {
    left: "listBullet",
    center: "buildingOffice",
    right: "magnifiyingGlass",
  };

  return (
    <div className="flex h-[250px] w-full flex-col flex-col items-stretch justify-end gap-8 rounded border-8 border-slate-700 bg-slate-700 p-3">
      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-slate-600">
        {context?.activeButton === "left" ? (
          <Switch />
        ) : context?.activeButton === "center" ? (
          <SearchAndSelect
            value={context?.locallySelectedOfficeName}
            setValue={context?.setLocallySelectedOfficeName}
            listOfValues={allOfficeNames}
          />
        ) : context?.activeButton === "right" ? (
          <Input
            onInput={handleUserSearchInput}
            value={context?.searchForUser}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="flex w-full items-center justify-between gap-8 bg-slate-700">
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
