import React from "react";
import Icon from "../icons/Icon";
import useAccount from "../../stores/SAccount";

interface Props {
  forename: string;
  surname: string;
  id: number;
  isFavourite: boolean;
}

export default function UserCardInfo({
  forename,
  surname,
  id,
  isFavourite,
}: Props) {
  const addToFavourites = useAccount((s) => s.addToFavourites);
  const deleteFromFavourites = useAccount((s) => s.deleteFromFavourites);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      deleteFromFavourites(id);
      return;
    }

    addToFavourites(id);
  };
  return (
    <div className="relative flex h-full cursor-pointer flex-col justify-end rounded-tr-lg border-2 border-pink-400/50 bg-pink-600 p-2">
      <button
        className={`absolute top-3 right-3 flex flex-col items-center justify-center rounded-full p-1 transition duration-150 ease-out  ${
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
      <div className="flex flex-col uppercase">
        <span className="text-lg font-light text-slate-900">{forename}</span>
        <span className="text-xs font-bold text-pink-400">{surname}</span>
      </div>
    </div>
  );
}
