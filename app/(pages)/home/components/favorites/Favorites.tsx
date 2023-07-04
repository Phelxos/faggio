"use client";

import { FC, useContext } from "react";
import { CTeams } from "../../../../../components/contexts/CTeams";
import SpinnerWrapped from "../../../../../components/spinners/SpinnerWrapped";
import useAccount from "../../../../../stores/SAccount";
import useCoworkers from "../../../../../stores/SCoworkers";
import CoworkerList from "./elements/CoworkerList";
import EmptyMessage from "./elements/EmptyStateMessage";

const Container: FC = () => {
  const c = useContext(CTeams);
  const favoriteCoworkers = useAccount((s) => s.favourites);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  function handleButtonClick() {
    if (!c?.isListView) c?.setIsListView(true);
  }

  return (
    <div>
      <p className="mb-3 text-2xl font-thin text-slate-400/75">
        Buchungen meiner Favoriten
      </p>
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
      <p className="mt-3 text-right text-xs font-semibold text-slate-400/25">
        Das angezeigte Datum ist jenes, an dem deine Favoriten planen das
        nächste Mal ins Büro zu kommen. Das Büro, für das die nächste Buchung
        gilt, steht unter dem Wochentag.
      </p>
    </div>
  );
};

export default Container;
