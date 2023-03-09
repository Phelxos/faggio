import React from "react";
import FavouritesContainer from "./FavouritesContainer";

export default function Favourites() {
  return (
    <div>
      <p className="mb-3 text-2xl font-thin text-slate-400/75">
        Buchungen meiner Favoriten
      </p>
      <FavouritesContainer />
    </div>
  );
}
