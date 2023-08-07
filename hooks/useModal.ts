"use client";

import { useState, useContext } from "react";
import { Context as BookingsContext } from "../app/(afterLogIn)/bookings/Context";
import useAccount from "../stores/SAccount";

const useModal = (): { isOpenModal: boolean; toggleModal: () => void } => {
  const context = useContext(BookingsContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const setIsOpenModalInStore = useAccount((s) => s.setIsOpenModal);
  const toggleModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
      setIsOpenModalInStore(false);
    } else {
      setIsOpenModal(true);
      setIsOpenModalInStore(true);
    }
    context?.toggleIsOpenModal();
  };

  return { isOpenModal, toggleModal };
};

export default useModal;
