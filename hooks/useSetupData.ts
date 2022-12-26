import useOffice from "../stores/SOffices";

export default function useSetupData() {
  const fetchAllOffices = useOffice((s) => s.fetchAllOffices);
  const allOffices = useOffice((s) => s.allOffices);
  if (allOffices.length === 0) {
    fetchAllOffices();
  }
}
