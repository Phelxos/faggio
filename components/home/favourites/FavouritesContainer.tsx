import React from "react";
import FavouritesUser from "./FavouritesUser";
import useCoworkers from "../../../stores/SCoworkers";
import useAccount from "../../../stores/SAccount";
import ICoworker from "../../../typings/interfaces/ICoworker";
import Spinner from "../../Spinner";

export default function FavouritesContainer() {
  const favouriteCoworkersOfLoggedInUserAccount = useAccount(
    (s) => s.favourites
  );
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  return (
    <div className="flex w-full snap-x gap-4 overflow-x-auto rounded bg-pink-600/25 py-8 px-4 shadow-xl">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {favouriteCoworkersOfLoggedInUserAccount.map((favouriteId) => {
            const coworker = (coworkers as ICoworker[]).find(
              (coworker: ICoworker) => coworker.coworkerId === favouriteId
            );
            if (coworker) {
              return (
                <FavouritesUser
                  key={favouriteId}
                  id={favouriteId}
                  imgSrc={coworker.imgSrc}
                  forename={coworker.forename}
                  surname={coworker.surname}
                />
              );
            }
          })}
        </>
      )}
    </div>
  );
}
