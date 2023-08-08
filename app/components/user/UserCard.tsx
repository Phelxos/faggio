"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../../../hooks/useModal";
import ICoworker from "../../../typings/interfaces/ICoworker";
import Modal from "../modals/user/Modal";
import UserCardControls from "./UserCardControls";
import UserCardInfo from "./UserCardInfo";

const UserCard: FC<ICoworker & { className?: string }> = ({
  forename,
  surname,
  imgSrc,
  coworkerId,
  className,
  phone,
  email,
}) => {
  const { isOpenModal, toggleModal } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
        {mounted &&
          createPortal(
            <Modal
              toggleModal={toggleModal}
              isDisplayingModal={isOpenModal}
              id={coworkerId}
            />,
            document.body
          )}
      </div>
      <UserCardInfo forename={forename} surname={surname} id={coworkerId} />
      <UserCardControls phone={phone} email={email} />
    </div>
  );
};

export default UserCard;
