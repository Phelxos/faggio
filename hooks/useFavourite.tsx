import { useState, useEffect } from "react";
import useAccount from "../stores/SAccount";

export default function useFavourite(id: number) {
  const [isFavourite, setIsFavourite] = useState(false);
  const favourites = useAccount((s) => s.favourites);

  useEffect(() => {
    const isCoworkerAFavouriteCoworkerOfLoggedInUser = favourites.some(
      (favouriteId) => id === favouriteId
    );
    setIsFavourite(isCoworkerAFavouriteCoworkerOfLoggedInUser);
  }, [favourites, id]);

  return isFavourite;
}
