import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Modal from "../modals/ModalUser/ModalUser";
import useModal from "../../hooks/useModal";
import ICoworker from "../../typings/interfaces/ICoworker";
import useTheme from "../../hooks/useTheme";

export default function UserImage({ coworker }: { coworker: ICoworker }) {
  const { isOpenModal, toggleModal } = useModal();
  const theme = useTheme();
  return (
    <>
      <Image
        src={coworker.imgSrc || ""}
        alt={`${coworker.forename} ${coworker.surname}`}
        key={`${coworker.forename} ${coworker.surname}`}
        width={50}
        height={50}
        className={`inline w-full rounded-full border-2 border-${theme}-500/50 shadow-lg`}
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
    </>
  );
}
