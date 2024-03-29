"use client";

import { FC, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../../../../icons/Icon";
import capitaliseFirstLetter from "../../../../../../helpers/capitaliseFirstLetter";
import useModal from "../../../../../../hooks/useModal";
import useTheme from "../../../../../../hooks/useTheme";
import useAccount from "../../../../../../stores/SAccount";
import Modal from "../../../../modals/profile/Modal";

const User: FC = () => {
  const user = useAccount((s) => s.forename);
  const currentTheme = useTheme();
  const { isOpenModal, toggleModal } = useModal();
  const documentBody = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      documentBody.current = document.body;
    }
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative flex items-center gap-1 overflow-hidden rounded-sm cursor-pointer bg-${currentTheme}-500 py-2 pl-5 pr-8 shadow-sm`}
      onClick={toggleModal}
    >
      <Icon
        className={`h-8 w-8 fill-${currentTheme}-300 absolute -bottom-1 -left-3 opacity-25`}
        icon="user"
      />
      <p
        className={`text-md font-bold tracking-widest text-${currentTheme}-800`}
      >
        {capitaliseFirstLetter(user)}
      </p>
      {mounted &&
        createPortal(
          <Modal toggleModal={toggleModal} isDisplayingModal={isOpenModal} />,
          documentBody.current!
        )}
    </div>
  );
};

export default User;
