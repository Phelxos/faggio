import React, { useContext } from "react";
import TActiveButton from "../../typings/types/TActiveButton";
import TIcon from "../../typings/types/TIcon";
import { CTeams } from "../contexts/CTeams";
import Button from "./TeamsControlsBarButton";
import Input from "./TeamsControlsBarInput";
import Switch from "./TeamsControlsBarSwitch";
import SearchAndSelect from "../SearchAndSelect";
import useOffice from "../../stores/SOffices";
import useTheme from "../../hooks/useTheme";

export default function ControlsBar() {
  const c = useContext(CTeams);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const theme = useTheme();

  const handleUserSearchInput = (e: any) => {
    const lastCharacterOfSearchInput =
      e.target.value[e.target.value.length - 1];
    if (/^[^a-zA-ZäÄöÖüÜß-]+$/.test(lastCharacterOfSearchInput)) return;
    if (e.target.value.length > 30) return;
    c?.setSearchForUser(e.target.value.toLowerCase());
  };

  const handleIconButtonClick = (button: TActiveButton) => {
    c?.setActiveButton(button);
  };

  const icons: { left: TIcon; center: TIcon; right: TIcon } = {
    left: "listBullet",
    center: "buildingOffice",
    right: "magnifiyingGlass",
  };

  return (
    <div className="flex h-[200px] w-full flex-col items-stretch justify-end gap-3 rounded-lg bg-pink-900/40 p-3">
      <div
        className={`flex h-1/2 flex-col items-center justify-center rounded-t-lg border-pink-200/75 ${
          c?.activeButton !== "center"
            ? "bg-pink-500"
            : " bg-gradient-to-r from-pink-500 to-pink-800"
        }`}
      >
        {c?.activeButton === "left" ? (
          <Switch />
        ) : c?.activeButton === "center" ? (
          <SearchAndSelect
            value={c?.locallySelectedOfficeName}
            setValue={c?.setLocallySelectedOfficeName}
            listOfValues={allOfficeNames}
            theme={theme}
            areOptionsOpeningUpward={true}
          />
        ) : c?.activeButton === "right" ? (
          <Input onInput={handleUserSearchInput} value={c?.searchForUser} />
        ) : (
          <></>
        )}
      </div>

      <div className="flex h-1/2 w-full items-center justify-between gap-8">
        <Button
          icon={icons.left}
          isActiveButton={c?.activeButton === "left"}
          onClick={() => handleIconButtonClick("left")}
        />
        <Button
          icon={icons.center}
          isActiveButton={c?.activeButton === "center"}
          onClick={() => handleIconButtonClick("center")}
        />
        <Button
          icon={icons.right}
          isActiveButton={c?.activeButton === "right"}
          onClick={() => handleIconButtonClick("right")}
        />
      </div>
    </div>
  );
}
