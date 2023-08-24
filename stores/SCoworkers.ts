import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { server } from "../config/index";
import mockCoworkers from "../database/mock/coworkers";
import ICoworker from "../typings/interfaces/ICoworker";

interface Interface {
  isLoading: boolean;
  coworkerListWithPhotos: ICoworker[];
  getCoworker: (id: number) => ICoworker | undefined;
  loadCoworkers: () => Promise<void>;
}

const isUsingSqlData = process.env.USE_SQL_DATA?.toLowerCase() === "true";

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
            let allCoworkers;
            if (isUsingSqlData) {
              allCoworkers = await res.json();
            } else {
              allCoworkers = mockCoworkers;
            }
            const resRandomUsers = await fetch(
              `https://randomuser.me/api/?results=${allCoworkers.length}`
            );
            const randomUsers = await resRandomUsers.json();
            const imgSources = randomUsers.results;

            const coworkerListWithPhotos: ICoworker[] = allCoworkers.map(
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
