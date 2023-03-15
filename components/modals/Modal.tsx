import React, { useEffect } from "react";
import useModal from "../../hooks/useModal";
import useTheme from "../../hooks/useTheme";

export default function Modal() {
  const { isDisplayingModal, toggleModal } = useModal();
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <dialog
      className={`fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-white/50`}
      onClick={toggleModal}
    >
      <div>Hi</div>
    </dialog>
  );
}
