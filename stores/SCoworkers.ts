import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import ICoworker from "../typings/interfaces/ICoworker";

interface Interface {
  coworkerListWithPhotos: ICoworker[];
  fetchCoworkerImages: () => Promise<void>;
  isLoading: boolean;
  setIsLoading: (newIsLoading: boolean) => void;
}

const useCoworkers = create<Interface>()(
  devtools(
    persist((set) => ({
      coworkerListWithPhotos: [],
      isLoading: true,
      setIsLoading: (newIsLoading: boolean) => {
        set(() => ({
          isLoading: newIsLoading,
        }));
      },
      fetchCoworkerImages: async () => {
        try {
          set({ isLoading: true });
          const resRandomUsers = await fetch(
            `https://randomuser.me/api/?results=${allColleaguesfromAPI.length}`
          );
          const randomUsers = await resRandomUsers.json();
          const imgSources = randomUsers.results;

          const colleaguesWithPhotos = allColleaguesfromAPI.map(
            (colleague: IColleague, i: number) => {
              return {
                ...colleague,
                imgSrc: imgSources[i].picture.large as string,
              };
            }
          );
          filterColleagues(colleaguesWithPhotos);
          setAllColleagues(colleaguesWithPhotos);
        } catch (e) {
          console.error(
            "Something has gone wrong while fetching the photos of the colleagues."
          );
        } finally {
          set({ isLoading: false });
          return;
        }
      },
    }))
  )
);

export default useCoworkers;

/* 
 async function fetchImagesOfColleagues(): Promise<IColleague[] | undefined> {
    try {
      setIsLoading(true);
      const resRandomUsers = await fetch(
        `https://randomuser.me/api/?results=${allColleaguesfromAPI.length}`
      );
      const randomUsers = await resRandomUsers.json();
      const imgSources = randomUsers.results;

      const colleaguesWithPhotos = allColleaguesfromAPI.map(
        (colleague: IColleague, i: number) => {
          return {
            ...colleague,
            imgSrc: imgSources[i].picture.large as string,
          };
        }
      );
      filterColleagues(colleaguesWithPhotos);
      setAllColleagues(colleaguesWithPhotos);
    } catch (e) {
      console.error(
        "Something has gone wrong while fetching the photos of the colleagues."
      );
    } finally {
      setIsLoading(false);
      return;
    }
  }
*/
