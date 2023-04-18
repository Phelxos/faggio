import React from "react";
import FavouritesUser from "./FavouritesUser";
import useCoworkers from "../../../stores/SCoworkers";
import useAccount from "../../../stores/SAccount";
import SpinnerWrapped from "../../spinners/SpinnerWrapped";
import ICoworker from "../../../typings/interfaces/ICoworker";
import Link from "next/link";
import Icon from "../../icons/Icon";

export default function FavouritesContainer() {
  const favouriteCoworkersOfLoggedInUserAccount = useAccount(
    (s) => s.favourites
  );
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  return (
    <div className="flex w-full snap-x gap-6 overflow-x-auto rounded bg-pink-600/25 py-8 px-4 shadow-xl">
      {isLoading ? (
        <SpinnerWrapped />
      ) : favouriteCoworkersOfLoggedInUserAccount?.length > 0 ? (
        <>
          {favouriteCoworkersOfLoggedInUserAccount.map((favouriteId, i) => {
            const coworker = (coworkers as ICoworker[])?.find(
              (coworker: ICoworker) => coworker.coworkerId === favouriteId
            );
            if (coworker) {
              return <FavouritesUser key={i} coworker={coworker} />;
            }
          })}
        </>
      ) : (
        <div className="flex w-full grow flex-col gap-10">
          <span className="flex items-center text-xs text-pink-400/50">
            <Icon
              icon="informationCircle"
              className="mr-2 h-8 w-8 opacity-50"
            />
            Du hast noch <span className="mx-1 font-bold">keine Favoriten</span>{" "}
            gewählt.
          </span>
          <Link
            href={"/teams"}
            className="self-end rounded-xl border-2 border-pink-800/75 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-700 to-pink-400 py-2 px-3 text-pink-900 shadow-lg"
          >
            <button className="font-mono text-xs uppercase tracking-wider">
              Kollegen favorisieren
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
