import React, { useEffect, useContext, useRef } from "react";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import useAccount from "../../../stores/SAccount";
import { CBookings } from "../../contexts/CBookings";
import useTheme from "../../../hooks/useTheme";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import {
  TOfficeCityEnglish,
  EOfficesEnglishToGerman,
} from "../../../typings/types/TOfficeCity";

export default function BookingsMyHeader() {
  const coworkerId: number = useAccount((s) => s.coworkerId);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const bookings = useBookings((s) => s.bookings);
  const context = useContext(CBookings);
  const theme = useTheme();
  const c = useContext(CBookings);

  let myBookingsInSelectedOffice = bookings.filter(
    (booking: IBooking) =>
      booking.office === c?.locallySelectedOfficeName &&
      booking.coworkerId === coworkerId
  );

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col justify-around">
      <p className="bg-emerald-900/50 p-4 text-lg font-thin tracking-wider text-emerald-500/75">
        Meine{" "}
        {myBookingsInSelectedOffice.length > 1 && (
          <>
            <span className="mx-1 font-bold">
              {myBookingsInSelectedOffice.length > 1
                ? myBookingsInSelectedOffice.length
                : ""}
            </span>{" "}
          </>
        )}
        Buchung{myBookingsInSelectedOffice.length > 1 && "en"}
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
            {myBookingsInSelectedOffice.length > 1 ? myBookingsInSelectedOffice.length : ""}
          </span>*/
