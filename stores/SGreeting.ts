import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { isSameDay } from "date-fns";
import transformObjectIntoArray from "../helpers/transformObjectIntoArray";

interface Interface {
  greeting: string;
  setGreeting: (greeting: string) => void;
  fetchGreetings: () => Promise<void>;
  chooseGreeting: () => void;
  language: string;
  setLanguage: (language: string) => void;
  hasLoaded: boolean;
  setHasLoaded: (status: boolean) => void;
  hasFetchedSuccessfully: boolean;
  setHasFetchedSuccessfully: (status: boolean) => void;
  timestamp: Date;
  setTimestamp: (timestamp: Date) => void;
}

const useGreeting = create<Interface>()(
  devtools(
    persist(
      (set, get) => ({
        hasLoaded: false,
        setHasLoaded: (status: boolean) => set({ hasLoaded: status }),
        hasFetchedSuccessfully: false,
        setHasFetchedSuccessfully: (status: boolean) =>
          set({ hasFetchedSuccessfully: status }),
        greeting: "Salut",
        setGreeting: (newGreeting: string) =>
          set(() => ({ greeting: newGreeting })),
        chooseGreeting: () => {},
        language: "Französisch",
        setLanguage: (newLanguage: string) =>
          set(() => ({ language: newLanguage })),
        fetchGreetings: async () => {
          try {
            const response = await axios.get(
              "https://gist.githubusercontent.com/subbe/94ba128e4560b50484eb6aa2556b7559/raw/eb48b92adb545c1651f019b9672804dad39c163f/greetings.json"
            );
            const greetings = transformObjectIntoArray(
              await response.data,
              "language"
            );
            set(() => ({
              hasFetchedSuccessfully: true,
              timestamp: new Date(),
            }));
          } catch (err) {
            console.error(
              "Something has gone wrong while fetching the greeting.",
              err
            );
          } finally {
            set(() => ({ hasLoaded: true }));
          }
        },
        timestamp: new Date(),
        setTimestamp: (newTimestamp: Date) => {
          set(() => ({ timestamp: newTimestamp }));
        },
      }),
      {
        name: "greeting",
      }
    )
  )
);

export default useGreeting;
