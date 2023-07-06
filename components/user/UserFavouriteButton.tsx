import React from "react";
import Icon from "../icons/Icon";
import useAccount from "../../stores/SAccount";
import useFavourite from "../../hooks/useFavorite";

export default function UserFavouriteButton({
  id,
  className,
}: {
  id: number;
  className?: string;
}) {
  const addToFavourites = useAccount((s) => s.addToFavourites);
  const deleteFromFavourites = useAccount((s) => s.deleteFromFavourites);
  const isFavourite = useFavourite(id);

  const handleFavouriteClick = () => {
    if (!id) return;

    if (isFavourite) {
      deleteFromFavourites(id);
      return;
    }

    addToFavourites(id);
  };

  return (
    <button
      className={`${className} flex flex-col items-center justify-center rounded-full p-1 transition duration-150 ease-out  ${
        isFavourite
          ? "bg-pink-500 hover:bg-pink-500/75"
          : "bg-pink-800 hover:bg-pink-800/75"
      }`}
      onClick={handleFavouriteClick}
    >
      <Icon
        icon="star"
        className={`h-6 w-6 ${
          isFavourite
            ? "fill-pink-200/75 hover:fill-pink-200/75"
            : "fill-pink-600 hover:fill-pink-600/75"
        }`}
      />
    </button>
  );
}
