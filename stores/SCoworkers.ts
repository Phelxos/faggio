import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import ICoworker from "../typings/interfaces/ICoworker";
import { server } from "../config/index";

interface Interface {
  coworkerListWithPhotos: ICoworker[] | Promise<void>;
  isLoading: boolean;
}

const useCoworkers = create<Interface>()(
  devtools(
    persist((set) => ({
      isLoading: true,
      coworkerListWithPhotos: (async () => {
        try {
          set({ isLoading: true });
          const res = await fetch(`${server}/api/teams`);
          const allCoworkersFromAPI = await res.json();
          const resRandomUsers = await fetch(
            `https://randomuser.me/api/?results=${allCoworkersFromAPI.length}`
          );
          const randomUsers = await resRandomUsers.json();
          const imgSources = randomUsers.results;

          const coworkersListWithPhotos: ICoworker[] = allCoworkersFromAPI.map(
            (coworker: ICoworker, i: number) => {
              return {
                ...coworker,
                imgSrc: imgSources[i].picture.large as string,
              };
            }
          );
          set(() => ({
            coworkerListWithPhotos: coworkersListWithPhotos,
          }));
        } catch (e) {
          console.error(
            "Something has gone wrong while fetching the photos of the coworkers."
          );
        } finally {
          set({ isLoading: false });
          return;
        }
      })(),
    }))
  )
);

export default useCoworkers;
