import useOffice from "../stores/SOffices";

export default function useSetupData() {
  const fetchAndSetAllOfficeNames = useOffice(
    (s) => s.fetchAndSetAllOfficeNames
  );
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  if (allOfficeNames.length === 0) {
    fetchAndSetAllOfficeNames();
  }
}
