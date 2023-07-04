import { useState, useContext } from "react";
import { CBookings } from "../app/(pages)/bookings/Context";

export default function useModal() {
  const c = useContext(CBookings);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
    c?.toggleIsOpenModal();
  };

  return { isOpenModal, toggleModal };
}
