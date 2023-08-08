"use client";

import { FC, useEffect, useContext } from "react";
import SearchAndSelect from "../../../../../components/SearchAndSelect";
import useOffice from "../../../../../../stores/SOffices";
import useAccount from "../../../../../../stores/SAccount";
import { Context as BookingsContext } from "../../../Context";
import useTheme from "../../../../../../hooks/useTheme";
import useBookings from "../../../../../../stores/SBookings";
import IBooking from "../../../../../../typings/interfaces/IBooking";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";

const Header: FC = () => {
  const coworkerId: number = useAccount((s) => s.coworkerId);
  const allOffices = useOffice((s) => s.allOffices);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const bookings = useBookings((s) => s.bookings);
  const theme = useTheme();
  const c = useContext(BookingsContext);

  let myBookingsInSelectedOffice = bookings.filter(
    (booking: IBooking) =>
      booking.officeId === c?.locallySelectedOfficeId &&
      booking.coworkerId === coworkerId
  );

  useEffect(() => {
    c?.setLocallySelectedOfficeId(globallySelectedOfficeId);
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
        Buchung{myBookingsInSelectedOffice.length !== 1 && "en"}
      </p>
      <div className="flex flex-wrap items-end justify-end gap-4 bg-emerald-700/50 p-4 text-lg">
        <span className="text-emerald-200/75">in</span>
        <div className="max-w-[150px]">
          <SearchAndSelect
            value={c?.locallySelectedOfficeId}
            setValue={c!.setLocallySelectedOfficeId}
            listOfValues={allOffices.map((office) => office.officeId)}
            theme={theme}
            displayFilter={(officeId) =>
              convertFromIdToOfficeName(officeId) as string
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
