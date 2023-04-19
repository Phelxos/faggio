import { useState, useEffect } from "react";
import useOffice from "../stores/SOffices";
import useGreeting from "../stores/SGreeting";
import useBookings from "../stores/SBookings";

export default function useSetupData() {
  const bookings = useBookings((s) => s.bookings);
  const fetchBookings = useBookings((s) => s.fetchBookings);
  const fetchGreeting = useGreeting((s) => s.fetchGreeting);
  const hasLoadedGreeting = useGreeting((s) => s.hasLoaded);
  const [isHydrated, setIsHydrated] = useState(false);

  const fetchAndSetOffice = useOffice((s) => s.fetchAndSetOffice);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);

  if (allOfficeNames.length === 0) fetchAndSetOffice();
  if (!bookings) fetchBookings();

  // wait till NextJS rehydration completes
  useEffect(() => {
    if (!hasLoadedGreeting) {
      fetchGreeting();
    }
    setIsHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isHydrated;
}
