import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import translateToGerman from "../helpers/translateToGerman";
import { isSameDay } from "date-fns";

interface Interface {
  greeting: string;
  setGreeting: (greeting: string) => void;
  fetchGreeting: () => Promise<void>;
  language: string;
  setLanguage: (language: string) => void;
  languageInGerman: string;
  setLanguageInGerman: (language: string) => void;
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
        greeting: "",
        languageInGerman: "",
        setLanguageInGerman: (newLanguageInGerman: string) =>
          set(() => ({ languageInGerman: newLanguageInGerman })),
        language: "",
        setGreeting: (newGreeting: string) =>
          set(() => ({ greeting: newGreeting })),
        setLanguage: (newLanguage: string) =>
          set(() => ({ language: newLanguage })),
        fetchGreeting: async () => {
          try {
            const response = await axios.get(
              "https://www.greetingsapi.com/random"
            );
            const { language, greeting } = response.data;
            const languageInGerman = await translateToGerman(language);
            if (
              isSameDay(new Date(), new Date(get().timestamp)) &&
              get().hasFetchedSuccessfully
            )
              return;
            set(() => ({
              greeting,
              language,
              languageInGerman,
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
