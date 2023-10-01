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
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
}

const useAccount = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        forename: "maximilian",
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
        isOpenModal: false,
        setIsOpenModal: (isOpen: boolean) => {
          set(() => ({
            isOpenModal: isOpen,
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
