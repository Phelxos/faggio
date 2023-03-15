import { useState } from "react";

export default function useModal() {
  const [isDisplayingModal, setIsDisplayingModal] = useState(true);

  const toggleModal = () => {
    console.log(
      "🚀 ~ file: useModal.ts:5 ~ useModal ~ isDisplayingModal:",
      isDisplayingModal
    );
    if (isDisplayingModal) {
      setIsDisplayingModal(false);
    } else {
      setIsDisplayingModal(true);
    }
  };

  return { isDisplayingModal, toggleModal };
}
