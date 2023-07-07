"use client";

import { FC } from "react";
import { createPortal } from "react-dom";
import Icon from "../../../../../../components/icons/Icon";
import Modal from "../../../../../../components/modals/profile/Modal";
import capitaliseFirstLetter from "../../../../../../helpers/capitaliseFirstLetter";
import useModal from "../../../../../../hooks/useModal";
import useTheme from "../../../../../../hooks/useTheme";
import useAccount from "../../../../../../stores/SAccount";

const User: FC = () => {
  const user = useAccount((s) => s.forename);
  const currentTheme = useTheme();
  const { isOpenModal, toggleModal } = useModal();
  let documentBody: HTMLElement | null = null;

  if (typeof document !== "undefined") {
    documentBody = document.body;
  }

  return (
    <div
      className={`relative flex items-center gap-1 overflow-hidden rounded-sm bg-${currentTheme}-500 py-2 pl-5 pr-8 shadow-sm`}
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
      {createPortal(
        <Modal toggleModal={toggleModal} isDisplayingModal={isOpenModal} />,
        documentBody!
      )}
    </div>
  );
};

export default User;
