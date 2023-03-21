import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";

interface Interface {
  forename: string;
  surname: string;
  coworkerId: number;
  favourites: number[];
  addToFavourites: (id: number) => void;
  deleteFromFavourites: (id: number) => void;
  mainOffice: TOfficeCityEnglish;
}

const useAccount = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        forename: "max",
        surname: "mustermann",
        coworkerId: 9999,
        favourites: [1001, 1002, 1003],
        mainOffice: "dortmund",
        addToFavourites: (newId: number) => {
          set((state) => ({
            favourites: [...state.favourites, newId],
          }));
        },
        deleteFromFavourites: (oldId: number) => {
          set((state) => ({
            favourites: state.favourites.filter((id) => id !== oldId),
          }));
        },
      }),
      {
        name: "account",
      }
    )
  )
);

export default useAccount;
