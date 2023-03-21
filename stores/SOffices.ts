import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { server } from "../config/index";
import IOffice from "../typings/interfaces/IOffice";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";
import useAccount from "./SAccount";

export const initialValueForGloballySelectedOffice: IOffice = {
  city: "dortmund",
  district: "Stadtviertel",
  address: { street: "straße", housenumber: "1", postcode: "12345" },
  areaInSquareMetres: 100,
  headcount: 25,
  workstations: 25,
  areDogsAllowed: true,
  description:
    "Im Osten Dortmunds gelegen lädt die viergeschossige Zentrale ins Herz des Unternehmens ein. Über 400 Mitarbeiter arbeiten hier täglich an der Zukunft der IT.",
  imgSrc: "/images/office.jpg",
};

interface Interface {
  allOffices: IOffice[] | [];
  allOfficeNames: TOfficeCityEnglish[] | [];
  globallySelectedOfficeName: TOfficeCityEnglish;
  setGloballySelectedOfficeName: (office: TOfficeCityEnglish) => void;
  globallySelectedOffice: IOffice;
  setGloballySelectedOffice: (officeCityName: TOfficeCityEnglish) => void;
  fetchAndSetOffice: () => void;
}

const useOffice = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        allOffices: [],
        allOfficeNames: [],
        globallySelectedOfficeName: useAccount.getState().mainOffice,
        setGloballySelectedOfficeName: (office) => {
          set({ globallySelectedOfficeName: office });
        },
        globallySelectedOffice: initialValueForGloballySelectedOffice,
        setGloballySelectedOffice: (officeCityName) => {
          set((state) => ({
            globallySelectedOffice: state.allOffices.find(
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
              globallySelectedOffice: fullList.find(
                (entry: IOffice) =>
                  entry.city === state.globallySelectedOfficeName
              ),
            }));
          } catch (err) {
            console.error(
              "Something has gone wrong, while fetching the list of offices:",
              err
            );
          }
        },
      }),
      {
        name: "office",
      }
    )
  )
);

export default useOffice;
