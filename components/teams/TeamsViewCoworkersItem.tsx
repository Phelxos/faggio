import React from "react";
import useModal from "../../hooks/useModal";
import FavouriteButton from "../user/UserFavouriteButton";
import ICoworker from "../../typings/interfaces/ICoworker";
import UserImage from "../user/UserImage";

export default function TeamsViewCoworkersItem({
  coworker,
}: {
  coworker: ICoworker;
}) {
  const { isOpenModal, toggleModal } = useModal();
  return (
    <li className="flex items-center justify-between gap-2 rounded-lg p-4 text-sm text-pink-200 odd:bg-pink-800 even:bg-pink-900 ">
      <div>
        <UserImage coworker={coworker} />
      </div>
      <div className="ml-2 flex grow flex-col">
        <span className="text-2xl font-thin uppercase tracking-wider text-pink-300">
          {coworker.forename}
        </span>{" "}
        <span className="font-semibold uppercase tracking-widest text-slate-900">
          {coworker.surname}
        </span>
      </div>
      <FavouriteButton
        id={coworker.coworkerId}
        className="border-2 border-pink-200/25"
      />
    </li>
  );
}
