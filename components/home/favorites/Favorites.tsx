import React from "react";
import FavouritesContainer from "./FavoritesContainer";

export default function Favorites() {
  return (
    <div>
      <p className="mb-3 text-2xl font-thin text-slate-400/75">
        Buchungen meiner Favoriten
      </p>
      <FavouritesContainer />
      <p className="mt-3 text-right text-xs font-semibold text-slate-400/25">
        Das angezeigte Datum ist jenes, an dem deine Favoriten planen das
        nächste Mal ins Büro zu kommen. Das Büro, für das die nächste Buchung
        gilt, steht unter dem Wochentag.
      </p>
    </div>
  );
}
