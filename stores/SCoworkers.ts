import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { server } from "../config/index";
import ICoworker from "../typings/interfaces/ICoworker";

interface Interface {
  isLoading: boolean;
  coworkerListWithPhotos: ICoworker[];
  getCoworker: (id: number) => ICoworker | undefined;
  loadCoworkers: () => Promise<void>;
}

const useCoworkers = create<Interface>()(
  devtools(
    persist(
      (set, get) => ({
        isLoading: true,
        coworkerListWithPhotos: [],
        getCoworker: (id: number) => {
          const coworkerListWithPhotos: ICoworker[] =
            get().coworkerListWithPhotos;
          return coworkerListWithPhotos.find(
            ({ coworkerId }) => coworkerId === id
          ) as ICoworker;
        },
        loadCoworkers: async () => {
          if (get().coworkerListWithPhotos.length > 0) return;
          try {
            set({ isLoading: true });
            const res = await fetch(`${server}/api/coworkers`);
            const allCoworkersFromAPI = await res.json();
            const resRandomUsers = await fetch(
              `https://randomuser.me/api/?results=${allCoworkersFromAPI.length}`
            );
            const randomUsers = await resRandomUsers.json();
            const imgSources = randomUsers.results;

            const coworkerListWithPhotos: ICoworker[] = allCoworkersFromAPI.map(
              (coworker: ICoworker, i: number) => {
                return {
                  ...coworker,
                  imgSrc: imgSources[i].picture.large as string,
                };
              }
            );
            set(() => ({
              coworkerListWithPhotos,
            }));
          } catch (error) {
            console.error(
              "🚨 Something has gone wrong in the store concerning the coworkers:",
              error
            );
          } finally {
            set({ isLoading: false });
          }
        },
      }),
      {
        name: "coworkers",
      }
    )
  )
);

export default useCoworkers;
