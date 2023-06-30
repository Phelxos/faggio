import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { server } from "../config/index";
import ICoworker from "../typings/interfaces/ICoworker";

interface Interface {
  isLoading: boolean;
  coworkerListWithPhotos: ICoworker[] | Promise<void>;
  getCoworker: (id: number) => ICoworker | undefined;
}

const useCoworkers = create<Interface>()(
  devtools(
    persist(
      (set, get) => ({
        isLoading: true,
        coworkerListWithPhotos: (async () => {
          try {
            set({ isLoading: true });
            const res = await fetch(`${server}/api/coworkers`);
            const allCoworkersFromAPI = await res.json();
            const resRandomUsers = await fetch(
              `https://randomuser.me/api/?results=${allCoworkersFromAPI.length}`
            );
            const randomUsers = await resRandomUsers.json();
            const imgSources = randomUsers.results;

            const coworkersListWithPhotos: ICoworker[] =
              allCoworkersFromAPI.map((coworker: ICoworker, i: number) => {
                return {
                  ...coworker,
                  imgSrc: imgSources[i].picture.large as string,
                };
              });
            set(() => ({
              coworkerListWithPhotos: coworkersListWithPhotos,
            }));
          } catch (err) {
            console.error("😣 ~ file: SCoworkers.ts:40", err);
          } finally {
            set({ isLoading: false });
            return;
          }
        })(),
        getCoworker: (id: number) => {
          const coworkerListWithPhotos: ICoworker[] | Promise<void> =
            get().coworkerListWithPhotos;
          if (coworkerListWithPhotos instanceof Promise) return;
          return coworkerListWithPhotos.find(
            ({ coworkerId }) => coworkerId === id
          ) as ICoworker;
        },
      }),
      {
        name: "coworkers",
      }
    )
  )
);

export default useCoworkers;
