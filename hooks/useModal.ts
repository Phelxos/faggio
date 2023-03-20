import { useState } from "react";

export default function useModal() {
  const [isDisplayingModal, setIsDisplayingModal] = useState(true);

  const toggleModal = () => {
    if (isDisplayingModal) {
      setIsDisplayingModal(false);
    } else {
      setIsDisplayingModal(true);
    }
  };

  return { isDisplayingModal, toggleModal };
}
