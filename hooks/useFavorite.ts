"use client";

import { useState, useEffect } from "react";
import useAccount from "../stores/SAccount";

const useFavorite = (id: number): boolean => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useAccount((s) => s.favourites);

  useEffect(() => {
    const isCoworkerFavoriteCoworkerOfLoggedInUser = favorites.some(
      (idOfFavoriteCoworker) => id === idOfFavoriteCoworker
    );
    setIsFavorite(isCoworkerFavoriteCoworkerOfLoggedInUser);
  }, [favorites, id]);

  return isFavorite;
};

export default useFavorite;
