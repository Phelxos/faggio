import { useEffect, useState } from "react";
import checkForCurrentDate from "../helpers/checkForCurrentDate";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import useGreeting from "../stores/SGreeting";
import useOffice from "../stores/SOffices";
import usePhoneSize from "./usePhoneSize";
import useCoworkers from "../stores/SCoworkers";

export default function useSetupData() {
  const bookings = useBookings((s) => s.bookings);
  const fetchBookings = useBookings((s) => s.fetchBookings);
  const loadCoworkers = useCoworkers((s) => s.loadCoworkers);
  const today = useCalendar((s) => s.today);
  const updateToCurrentDate = useCalendar((s) => s.updateToCurrentDate);
  const fetchGreeting = useGreeting((s) => s.fetchGreetings);
  const hasLoadedGreeting = useGreeting((s) => s.hasLoaded);
  const isIncorrectSize = usePhoneSize();

  const [isHydrated, setIsHydrated] = useState(false);

  const fetchAndSetOffice = useOffice((s) => s.fetchAndSetOffice);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);

  if (allOfficeNames.length === 0) fetchAndSetOffice();
  if (bookings.length === 0) fetchBookings();
  if (!checkForCurrentDate(today)) updateToCurrentDate();
  loadCoworkers();

  // Wait till NextJS rehydration completes
  useEffect(() => {
    if (!hasLoadedGreeting) {
      fetchGreeting();
    }
    setIsHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isHydrated, isIncorrectSize };
}
