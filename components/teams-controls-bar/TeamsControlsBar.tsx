import React, { useState, useContext, useEffect } from "react";
import TActiveButton from "../../typings/types/TActiveButton";
import TIcon from "../../typings/types/TIcon";
import { ContextTeams } from "../contexts/ContextTeams";
import Button from "./TeamsControlsBarButton";
import Input from "./TeamsControlsBarInput";
import SearchAndSelect from "../SearchAndSelect";
import useOffice from "../../stores/SOffices";

export default function ControlsBar() {
  const context = useContext(ContextTeams);
  const allOffices = useOffice((s) => s.allOffices);

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

  useEffect(() => {
    console.log(allOffices);
  }, [context?.activeButton]);

  return (
    <div className="flex h-[250px] w-full flex-col items-stretch justify-end rounded bg-slate-600">
      {context?.activeButton === "left" ? (
        <></>
      ) : context?.activeButton === "center" ? (
        <SearchAndSelect
          value={context?.displayedOffice}
          setValue={context.setDisplayedOffice}
          listOfValues={allOffices}
        />
      ) : context?.activeButton === "right" ? (
        <Input onInput={handleUserSearchInput} value={context?.searchForUser} />
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
