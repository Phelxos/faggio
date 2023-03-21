import React, { useState, useEffect } from "react";
import UserCardInfo from "./UserCardInfo";
import UserCardControls from "./UserCardControls";
import ICoworker from "../../typings/interfaces/ICoworker";
import Image from "next/image";
import useAccount from "../../stores/SAccount";
import useModal from "../../stores/SModal";

export default function UserCard({
  forename,
  surname,
  imgSrc,
  coworkerId,
}: ICoworker) {
  const { displayModal } = useModal();
  const [
    isFavouriteCoworkerOfLoggedInUser,
    setIsFavouriteCoworkerOfLoggedInUser,
  ] = useState(false);
  const favouriteCoworkersOfLoggedInUser = useAccount((s) => s.favourites);

  useEffect(() => {
    const isCoworkerAFavouriteCoworkerOfLoggedInUser =
      favouriteCoworkersOfLoggedInUser.some(
        (favouriteId) => coworkerId === favouriteId
      );
    setIsFavouriteCoworkerOfLoggedInUser(
      isCoworkerAFavouriteCoworkerOfLoggedInUser
    );
  }, [favouriteCoworkersOfLoggedInUser, coworkerId]);

  return (
    <div className="grid h-[250px] min-w-[275px] snap-center grid-cols-[2.5fr_2fr] grid-rows-[3fr_2fr] place-items-stretch gap-2 rounded-lg border-[8px] border-transparent bg-slate-800 text-pink-100">
      <div className="relative flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          src={imgSrc || ""}
          alt={`${forename} ${surname}`}
          className="w-full rounded-tl-lg border-2 border-slate-500/50 shadow-inner"
          onClick={() =>
            displayModal({
              title: "Modal",
              descriptionLong: "long long long description",
              descriptionShort: "short description",
              buttonAcceptLabel: "annehmen",
              buttonDeclineLabel: "abbrechen",
              onButtonAcceptClick: () => console.log("accept"),
              onButtonDeclineClick: () => console.log("decline"),
            })
          }
        />
      </div>
      <UserCardInfo
        forename={forename}
        surname={surname}
        id={coworkerId}
        isFavourite={isFavouriteCoworkerOfLoggedInUser}
      />
      <UserCardControls />
    </div>
  );
}
