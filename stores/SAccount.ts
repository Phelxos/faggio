import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";

interface Interface {
  forename: string;
  surname: string;
  favourites: number[];
  mainOffice: TOfficeCityEnglish;
}

const useAccount = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        forename: "max",
        surname: "mustermann",
        favourites: [9432, 5632, 8834],
        mainOffice: "dortmund",
      }),
      {
        name: "account",
      }
    )
  )
);

export default useAccount;
