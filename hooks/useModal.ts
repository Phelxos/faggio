import { useState } from "react";

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    if (isOpenModal) setIsOpenModal(false);
    else setIsOpenModal(true);
  };

  return { isOpenModal, toggleModal };
}
