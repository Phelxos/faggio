import React, { useState, useEffect } from "react";
import UserCardInfo from "./UserCardInfo";
import UserCardControls from "./UserCardControls";
import ICoworker from "../../typings/interfaces/ICoworker";
import Image from "next/image";
import { createPortal } from "react-dom";
import Modal from "../modals/ModalUser/ModalUser";
import useModal from "../../hooks/useModal";

export default function UserCard({
  forename,
  surname,
  imgSrc,
  coworkerId,
  className,
}: ICoworker & { className?: string }) {
  const { isOpenModal, toggleModal } = useModal();

  return (
    <div
      className={`grid h-[250px] min-w-[275px] snap-center grid-cols-[2.5fr_2fr] grid-rows-[3fr_2fr] place-items-stretch gap-2 rounded-lg border-[8px] border-transparent bg-slate-800 text-pink-100 ${className}`}
    >
      <div className="relative flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          src={imgSrc || ""}
          alt={`${forename} ${surname}`}
          className="w-full rounded-tl-lg border-2 border-slate-500/50 shadow-inner"
          onClick={toggleModal}
        />
        {createPortal(
          <Modal
            toggleModal={toggleModal}
            isDisplayingModal={isOpenModal}
            id={coworkerId}
          />,
          document.body
        )}
      </div>
      <UserCardInfo forename={forename} surname={surname} id={coworkerId} />
      <UserCardControls />
    </div>
  );
}
