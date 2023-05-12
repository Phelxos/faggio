import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Interface {
  forename: string;
  surname: string;
  coworkerId: number;
  favourites: number[];
  addToFavourites: (id: number) => void;
  deleteFromFavourites: (id: number) => void;
  mainOfficeId: number;
}

const useAccount = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        forename: "max",
        surname: "mustermann",
        coworkerId: 9999,
        favourites: [1001, 1002, 1003],
        mainOfficeId: 10,
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
