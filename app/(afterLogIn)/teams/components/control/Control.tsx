"use client";

import { FC, useContext } from "react";
import SearchAndSelect from "../../../../components/SearchAndSelect";
import convertFromIdToOfficeName from "../../../../../helpers/convertFromIdToOfficeName";
import useTheme from "../../../../../hooks/useTheme";
import useOffice from "../../../../../stores/SOffices";
import TActiveButton from "../../../../../typings/types/TActiveButton";
import TIcon from "../../../../../typings/types/TIcon";
import { Context } from "../../Context";
import Button from "./elements/Button";
import Search from "./elements/Search";
import Switch from "./elements/Switch";

const Control: FC = () => {
  const context = useContext(Context);
  const allOffices = useOffice((s) => s.allOffices);
  const theme = useTheme();

  const handleUserSearchInput = (e: any) => {
    const lastCharacterOfSearchInput =
      e.target.value[e.target.value.length - 1];
    if (/^[^a-zA-ZäÄöÖüÜß-]+$/.test(lastCharacterOfSearchInput)) return;
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
    <div className="col-start-1 col-end-13 row-start-2 row-end-3 flex h-[200px] w-full flex-col items-stretch justify-end gap-3 rounded-lg bg-pink-900/40 p-3 sm:col-start-3 sm:col-end-11 md:col-start-4 md:col-end-10 lg:col-start-8 lg:col-end-12 lg:row-start-1 lg:row-end-2 lg:place-self-center xl:col-end-11">
      <div
        className={`flex h-1/2 flex-col justify-center rounded-t-lg border-pink-200/75 xl:px-4 ${
          context?.activeButton !== "center"
            ? "bg-pink-500"
            : " bg-gradient-to-r from-pink-500 to-pink-800"
        }`}
      >
        {context?.activeButton === "left" ? (
          <Switch />
        ) : context?.activeButton === "center" ? (
          <SearchAndSelect
            value={context?.locallySelectedOfficeId}
            setValue={context?.setLocallySelectedOfficeId}
            listOfValues={allOffices.map((office) => office.officeId)}
            theme={theme}
            displayFilter={(officeId) =>
              convertFromIdToOfficeName(officeId) as string
            }
          />
        ) : context?.activeButton === "right" ? (
          <Search
            onInput={handleUserSearchInput}
            value={context?.searchForUser}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="flex h-1/2 w-full items-center justify-between gap-8">
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
};

export default Control;
