import useOffice from "../stores/SOffices";

export default function useSetupData() {
  const fetchAndSetOffice = useOffice((s) => s.fetchAndSetOffice);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  if (allOfficeNames.length === 0) {
    fetchAndSetOffice();
  }
}
