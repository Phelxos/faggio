import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { server } from "../config/index";
import mockOffices from "../database/mock/offices";
import IOffice from "../typings/interfaces/IOffice";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";

export const initialValueForGloballySelectedOffice: IOffice = {
  city: "dortmund",
  officeId: 10,
  district: "schueren",
  street: "straße",
  houseNumber: "1",
  postcode: "12345",
  areaInSquareMeters: 100,
  headcount: 25,
  workstations: 25,
  areDogsAllowed: true,
  description: "Beschreibung",
  imgSrc: "/images/office.jpg",
};

interface Interface {
  allOffices: IOffice[] | [];
  allOfficeNames: TOfficeCityEnglish[] | [];
  globallySelectedOfficeId: number;
  setGloballySelectedOfficeId: (officeId: number) => void;
  globallySelectedOffice: IOffice;
  setGloballySelectedOffice: (officeId: number) => void;
  fetchAndSetOffice: () => Promise<void>;
}

const isUsingSqlData = process.env.USE_SQL_DATA?.toLowerCase() === "true";

const useOffice = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        allOffices: [],
        allOfficeNames: [],
        globallySelectedOfficeId:
          initialValueForGloballySelectedOffice.officeId,
        globallySelectedOffice: initialValueForGloballySelectedOffice,
        setGloballySelectedOffice: (officeId) => {
          set({
            globallySelectedOffice: useOffice
              .getState()
              .allOffices.find((entry: IOffice) => entry.officeId === officeId),
          });
        },
        setGloballySelectedOfficeId: (officeId) => {
          set({ globallySelectedOfficeId: officeId });
          set({
            globallySelectedOffice: useOffice
              .getState()
              .allOffices.find((entry: IOffice) => entry.officeId === officeId),
          });
        },
        fetchAndSetOffice: async () => {
          let fullList: IOffice[] = [];
          try {
            if (isUsingSqlData) {
              const res = await fetch(`${server}/api/offices`);
              fullList = await res.json();
            } else {
              fullList = mockOffices;
            }
            if (fullList.length > 0) {
              set({ allOffices: fullList });
              set({
                allOfficeNames: fullList.map((entry: IOffice) => entry.city),
              });
              set((state) => ({
                globallySelectedOfficeId: fullList.find(
                  (entry: IOffice) =>
                    entry.officeId === state.globallySelectedOfficeId
                )?.officeId,
                globallySelectedOffice: fullList.find(
                  (entry: IOffice) =>
                    entry.officeId === state.globallySelectedOfficeId
                ),
              }));
            } else {
              throw new Error("🚨 The list of fetched offices is empty.");
            }
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
