import { useState, useEffect } from "react";
import useOffice from "../stores/SOffices";
import useGreeting from "../stores/SGreeting";

export default function useSetupData() {
  const fetchGreeting = useGreeting((s) => s.fetchGreeting);
  const hasLoadedGreeting = useGreeting((s) => s.hasLoaded);
  const [isHydrated, setIsHydrated] = useState(false);

  const fetchAndSetOffice = useOffice((s) => s.fetchAndSetOffice);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  if (allOfficeNames.length === 0) {
    fetchAndSetOffice();
  }

  // wait till NextJS rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedGreeting) {
      fetchGreeting();
    }
  }, [fetchGreeting, hasLoadedGreeting]);

  return isHydrated;
}
