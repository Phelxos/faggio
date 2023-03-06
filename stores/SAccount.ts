import { createStore } from "zustand";
import TOfficeCity from "../typings/types/TOfficeCity";

interface Interface {
  forename: string;
  surname: string;
  favourites: number[];
  mainOffice: TOfficeCity;
}

const useAccount = createStore<Interface>((set) => ({
  forename: "max",
  surname: "mustermann",
  favourites: [9432, 5632, 8834],
  mainOffice: "dortmund",
}));
