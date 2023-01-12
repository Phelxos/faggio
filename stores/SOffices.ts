import create from "zustand";
import { devtools } from "zustand/middleware";
import { server } from "../config/index";
import IOffice from "../typings/interfaces/IOffice";
import TOfficeCity from "../typings/types/TOfficeCity";

interface Props {
  allOfficeNames: TOfficeCity[] | [];
  displayedOffice: TOfficeCity;
  setDisplayedOffice: (office: TOfficeCity) => void;
  fetchAndSetAllOfficeNames: () => void;
}

const useOffice = create<Props>()(
  devtools((set, get) => ({
    allOfficeNames: [],
    displayedOffice: "dortmund",
    setDisplayedOffice: (office) => {
      set({ displayedOffice: office });
    },
    fetchAndSetAllOfficeNames: async () => {
      try {
        const res = await fetch(`${server}/api/offices`);
        const fullList = await res.json();
        set({
          allOfficeNames: fullList.map((entry: IOffice) => entry.city),
        });
      } catch (e) {
        console.error(
          "Something has gone wrong while fetching the list of offices."
        );
      }
    },
  }))
);

export default useOffice;
