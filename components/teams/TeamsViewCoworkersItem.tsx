import React from "react";
import { createPortal } from "react-dom";
import Modal from "../modals/ModalUser";
import useModal from "../../hooks/useModal";
import FavouriteButton from "../user/UserFavouriteButton";
import Image from "next/image";
import ICoworker from "../../typings/interfaces/ICoworker";

export default function TeamsViewCoworkersItem({
  coworker,
}: {
  coworker: ICoworker;
}) {
  const { isOpenModal, toggleModal } = useModal();
  return (
    <li className="flex items-center justify-between gap-2 rounded-lg p-4 text-sm text-pink-200 odd:bg-pink-800 even:bg-pink-900 ">
      <Image
        src={coworker.imgSrc || ""}
        alt={`${coworker.forename} ${coworker.surname}`}
        width={50}
        height={50}
        className="mr-4 inline rounded-full border-2 border-pink-500"
        onClick={toggleModal}
      />
      {createPortal(
        <Modal
          toggleModal={toggleModal}
          isDisplayingModal={isOpenModal}
          id={coworker.coworkerId}
        />,
        document.body
      )}
      <div className="flex grow flex-col">
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
