"use client";

import { FC, useContext } from "react";
import SearchAndSelect from "../../../../../components/SearchAndSelect";
import { CTeams } from "../../Context";
import convertFromIdToOfficeName from "../../../../../helpers/convertFromIdToOfficeName";
import useTheme from "../../../../../hooks/useTheme";
import useOffice from "../../../../../stores/SOffices";
import TActiveButton from "../../../../../typings/types/TActiveButton";
import TIcon from "../../../../../typings/types/TIcon";
import Button from "./elements/Button";
import Search from "./elements/Search";
import Switch from "./elements/Switch";

const Control: FC = () => {
  const c = useContext(CTeams);
  const allOffices = useOffice((s) => s.allOffices);
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
            value={c.locallySelectedOfficeId}
            setValue={c.setLocallySelectedOfficeId}
            listOfValues={allOffices.map((office) => office.officeId)}
            theme={theme}
            displayFilter={(officeId) =>
              convertFromIdToOfficeName(officeId) as string
            }
          />
        ) : c?.activeButton === "right" ? (
          <Search onInput={handleUserSearchInput} value={c?.searchForUser} />
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
};

export default Control;
