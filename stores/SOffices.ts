import create from "zustand";
import { devtools } from "zustand/middleware";
import { server } from "../config/index";
import IOffice from "../typings/interfaces/IOffice";
import TOfficeCity from "../typings/types/TOfficeCity";

const initialValueForCurrentlyChosenOffice: IOffice = {
  city: "dortmund",
  district: "Stadtviertel",
  adress: { street: "straße", housenumber: "1", postcode: "12345" },
  areaInSquareMetres: 100,
  headcount: 25,
  workstations: 25,
  areDogsAllowed: true,
  description:
    "Im Osten Dortmunds gelegen lädt die viergeschossige Zentrale ins Herz adessos ein. Über 400 Mitarbeiter arbeiten hier täglich an der Zukunft der IT.",
  imgSrc: "/images/office.jpg",
};

interface Props {
  allOffices: IOffice[] | [];
  allOfficeNames: TOfficeCity[] | [];
  displayedOffice: TOfficeCity;
  setDisplayedOffice: (office: TOfficeCity) => void;
  currentlyChosenOffice: IOffice;
  setCurrentlyChosenOffice: (officeCityName: TOfficeCity) => void;
  fetchAndSetOffice: () => void;
}

const useOffice = create<Props>()(
  devtools((set, get) => ({
    allOffices: [],
    allOfficeNames: [],
    displayedOffice: "dortmund",
    setDisplayedOffice: (office) => {
      set({ displayedOffice: office });
    },
    currentlyChosenOffice: initialValueForCurrentlyChosenOffice,
    setCurrentlyChosenOffice: (officeCityName) => {
      set((state) => ({
        currentlyChosenOffice: state.allOffices.find(
          (entry: IOffice) => entry.city === officeCityName
        ),
      }));
    },
    fetchAndSetOffice: async () => {
      try {
        const res = await fetch(`${server}/api/offices`);
        const fullList = await res.json();
        set({ allOffices: fullList });
        set({
          allOfficeNames: fullList.map((entry: IOffice) => entry.city),
        });
        set((state) => ({
          currentlyChosenOffice: fullList.find(
            (entry: IOffice) => entry.city === state.displayedOffice
          ),
        }));
      } catch (e) {
        console.error(
          "Something has gone wrong while fetching the list of offices."
        );
      }
    },
  }))
);

export default useOffice;
