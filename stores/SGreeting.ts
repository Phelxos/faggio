import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import transformObjectIntoArrayOfObjects from "../helpers/transformObjectIntoArrayOfObjects";

interface Greeting {
  language: string;
  greetings: string[];
  countries: {
    name: string;
    flag: unknown;
  }[];
}

interface Interface {
  greeting: string;
  pronouncation: string;
  setPronouncation: (pronouncation: string) => void;
  greetings: Greeting[];
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
        pronouncation: "salü",
        setPronouncation: (newPronouncation: string) => {
          set(() => ({ pronouncation: newPronouncation }));
        },
        greetings: [],
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
            const greetings: Greeting[] = transformObjectIntoArrayOfObjects(
              await response.data,
              "language"
            );
            const randomNumber = Math.floor(Math.random() * greetings.length);
            const rawGreeting = greetings[randomNumber]?.greetings[0];
            const greeting = rawGreeting.split(" ")[0];
            const pronouncation = rawGreeting
              .split(" ")[1]
              .replace(/^\(|\)$/g, "");
            const language = greetings[randomNumber]?.language;
            set(() => ({
              greetings,
              greeting,
              pronouncation,
              language,
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
