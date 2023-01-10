import create from "zustand";
import { devtools } from "zustand/middleware";
import TLocation from "../typings/types/TOfficeCity";
import { server } from "../config/index";

interface Props {
  allOffices: TLocation[] | [];
  fetchAllOffices: () => void;
}

const useOffice = create<Props>()(
  devtools((set, get) => ({
    allOffices: [],
    fetchAllOffices: async () => {
      try {
        const res = await fetch(`${server}/api/offices`);
        const fullList = await res.json();
        set({
          allOffices: fullList.map(
            (entry: { office: TLocation }) => entry.office
          ),
        });
      } catch (e) {
        console.error(
          "Something has gone wrong while fetching the list of offices."
        );
      }
    },
  }))
);

export default useOffice;
