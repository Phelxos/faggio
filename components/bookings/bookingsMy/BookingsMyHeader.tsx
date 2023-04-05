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
import useViewportDistance from "../../../hooks/useViewportDistance";

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
  const { isCloserToTop } = useViewportDistance(inputRef);

  let bookedOffice = bookings.filter(
    (booking: IBooking) => booking.office === c?.locallySelectedOfficeName
  );

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-around rounded-t-lg bg-emerald-900 p-6">
      <div
        className="flex h-full items-end font-thin text-slate-50"
        ref={inputRef}
      >
        <span className="flex w-3/4 flex-wrap items-center">
          Meine{" "}
          <span className="mx-2 font-bold">
            {bookedOffice.length > 1 ? bookedOffice.length : ""}
          </span>
          Buchung{bookings.length !== 1 ? "en" : ""} in
        </span>
        <SearchAndSelect
          value={context?.locallySelectedOfficeName}
          setValue={context!.setLocallySelectedOfficeName}
          listOfValues={allOfficeNames}
          theme={theme}
          displayFilter={(city: TOfficeCityEnglish) =>
            EOfficesEnglishToGerman[city]
          }
          areOptionsOpeningUpward={isCloserToTop ? false : true}
        />
      </div>
    </div>
  );
}
