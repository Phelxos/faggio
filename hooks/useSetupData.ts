import { useState, useEffect } from "react";
import useOffice from "../stores/SOffices";
import useGreeting from "../stores/SGreeting";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import checkForCurrentDate from "../helpers/checkForCurrentDate";

export default function useSetupData() {
  const bookings = useBookings((s) => s.bookings);
  const fetchBookings = useBookings((s) => s.fetchBookings);
  const today = useCalendar((s) => s.today);
  const updateToCurrentDate = useCalendar((s) => s.updateToCurrentDate);
  const fetchGreeting = useGreeting((s) => s.fetchGreeting);
  const hasLoadedGreeting = useGreeting((s) => s.hasLoaded);

  const [isHydrated, setIsHydrated] = useState(false);

  const fetchAndSetOffice = useOffice((s) => s.fetchAndSetOffice);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);

  if (allOfficeNames.length === 0) fetchAndSetOffice();
  if (bookings.length === 0) fetchBookings();
  if (!checkForCurrentDate(today)) updateToCurrentDate();

  // Wait till NextJS rehydration completes
  useEffect(() => {
    if (!hasLoadedGreeting) {
      fetchGreeting();
    }
    setIsHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isHydrated;
}
