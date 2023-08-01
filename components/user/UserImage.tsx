"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../../hooks/useModal";
import useTheme from "../../hooks/useTheme";
import useCoworkers from "../../stores/SCoworkers";
import TCoworkerId from "../../typings/types/TCoworkerId";
import Modal from "../modals/user/Modal";

const UserImage: FC<{ coworkerId: TCoworkerId }> = ({ coworkerId }) => {
  const { isOpenModal, toggleModal } = useModal();
  const coworker = useCoworkers((s) => s.getCoworker(coworkerId));
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Image
        src={coworker?.imgSrc || ""}
        alt={`${coworker?.forename} ${coworker?.surname}`}
        key={`${coworker?.forename} ${coworker?.surname}`}
        width={50}
        height={50}
        className={`inline w-full rounded-full border-2 border-${theme}-500/50 shadow-lg`}
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
    </>
  );
};

export default UserImage;
