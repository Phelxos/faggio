"use client";

import { FC, useContext } from "react";
import { Context as TeamsContext } from "../../../teams/Context";
import SpinnerWrapped from "../../../../components/spinners/SpinnerWrapped";
import useAccount from "../../../../../stores/SAccount";
import useCoworkers from "../../../../../stores/SCoworkers";
import CoworkerList from "./elements/CoworkerList";
import EmptyMessage from "./elements/EmptyStateMessage";

const Container: FC = () => {
  const context = useContext(TeamsContext);
  const favoriteCoworkers = useAccount((s) => s.favourites);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  function handleButtonClick() {
    if (!context?.isListView) context?.setIsListView(true);
  }

  return (
    <div className="col-span-full sm:col-span-8 sm:col-start-3 md:col-start-1 md:col-end-6 md:row-start-3 md:row-end-4 lg:col-start-3">
      <p className="mb-3 text-2xl font-thin text-slate-400/75">
        Buchungen meiner Favoriten
      </p>
      <div className="flex h-[275px] w-full snap-x gap-9 overflow-x-scroll rounded bg-pink-600/25 px-4 pb-8 pt-10 shadow-xl">
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
