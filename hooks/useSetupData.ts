import { useState, useEffect } from "react";
import useOffice from "../stores/SOffices";

export default function useSetupData() {
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

  return isHydrated;
}
