import React, { useEffect, useContext, useRef } from "react";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useTheme from "../../../hooks/useTheme";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import {
  TOfficeCityEnglish,
  EOfficesEnglishToGerman,
} from "../../../typings/types/TOfficeCity";

export default function BookingsMyHeader() {
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const bookings = useBookings((s) => s.bookings);
  const context = useContext(CBookings);
  const theme = useTheme();
  const c = useContext(CBookings);
  const inputRef = useRef(null);

  let bookedOffice = bookings.filter(
    (booking: IBooking) => booking.office === c?.locallySelectedOfficeName
  );

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col justify-around">
      <p className="bg-emerald-900/50 p-4 text-lg font-thin tracking-wider text-emerald-500/75">
        Meine{" "}
        {bookedOffice.length > 1 && (
          <>
            <span className="mx-1 font-bold">
              {bookedOffice.length > 1 ? bookedOffice.length : ""}
            </span>{" "}
          </>
        )}
        Buchungen
      </p>
      <div className="flex flex-wrap items-end justify-end gap-4 bg-emerald-700/50 p-4 text-lg">
        <span className="text-emerald-200/75">in</span>
        <div className="max-w-[150px]">
          <SearchAndSelect
            value={c?.locallySelectedOfficeName}
            setValue={c!.setLocallySelectedOfficeName}
            listOfValues={allOfficeNames}
            theme={theme}
            displayFilter={(city: TOfficeCityEnglish) =>
              EOfficesEnglishToGerman[city]
            }
          />
        </div>
      </div>
    </div>
  );
}

/* <span className="mx-2 font-bold">
            {bookedOffice.length > 1 ? bookedOffice.length : ""}
          </span>*/
