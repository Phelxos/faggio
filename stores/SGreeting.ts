import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

interface Interface {
  greeting: string;
  language: string;
  setGreeting: (greeting: string) => void;
  setLanguage: (language: string) => void;
  fetchGreeting: () => Promise<void>;
  hasLoaded: boolean;
  setHasLoaded: (status: boolean) => void;
}

const useGreeting = create<Interface>()(
  devtools(
    persist(
      (set) => ({
        hasLoaded: false,
        setHasLoaded: (status: boolean) => set({ hasLoaded: status }),
        greeting: "",
        language: "",
        setGreeting: (newGreeting: string) =>
          set(() => ({ greeting: newGreeting })),
        setLanguage: (newLanguage: string) =>
          set(() => ({ greeting: newLanguage })),
        fetchGreeting: async () => {
          try {
            const response = await axios.get(
              "https://www.greetingsapi.com/random"
            );
            const { language, greeting } = response.data;
            set(() => ({ greeting, language }));
          } catch (err) {
            console.error(
              "Something has gone wrong while fetching the greeting.",
              err
            );
          } finally {
            set(() => ({ hasLoaded: true }));
          }
        },
      }),
      {
        name: "greeting",
      }
    )
  )
);

export default useGreeting;
