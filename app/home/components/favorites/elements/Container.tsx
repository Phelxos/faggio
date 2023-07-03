"use client";

import { FC, useContext } from "react";
import { CTeams } from "../../../../../components/contexts/CTeams";
import SpinnerWrapped from "../../../../../components/spinners/SpinnerWrapped";
import useAccount from "../../../../../stores/SAccount";
import useCoworkers from "../../../../../stores/SCoworkers";
import CoworkerList from "./CoworkerList";
import EmptyMessage from "./EmptyMessage";

const Container: FC = () => {
  const c = useContext(CTeams);
  const favoriteCoworkers = useAccount((s) => s.favourites);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  function handleButtonClick() {
    if (!c?.isListView) c?.setIsListView(true);
  }

  return (
    <div className="flex w-full snap-x gap-6 overflow-x-auto rounded bg-pink-600/25 px-4 py-8 shadow-xl">
      {isLoading ? (
        <SpinnerWrapped />
      ) : favoriteCoworkers?.length > 0 ? (
        <CoworkerList
          allCoworkers={coworkers}
          favoriteCoworkers={favoriteCoworkers}
        />
      ) : (
        <EmptyMessage onButtonClick={handleButtonClick} />
      )}
    </div>
  );
};

export default Container;
