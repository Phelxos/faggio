import React from "react";
import ModalDefault from "./ModalDefault";
import useModal from "../../stores/SModal";
import { shallow } from "zustand/shallow";

export default function Modal() {
  const {
    isDisplayingModal,
    toggleModal,
    title,
    descriptionShort,
    descriptionLong,
    buttonAcceptLabel,
    onButtonAcceptClick,
    buttonDeclineLabel,
    onButtonDeclineClick,
  } = useModal(
    (s) => ({
      isDisplayingModal: s.isDisplayingModal,
      toggleModal: s.toggleModal,
      title: s.title,
      descriptionShort: s.descriptionShort,
      descriptionLong: s.descriptionLong,
      buttonAcceptLabel: s.buttonAcceptLabel,
      onButtonAcceptClick: s.onButtonAcceptClick,
      buttonDeclineLabel: s.buttonDeclineLabel,
      onButtonDeclineClick: s.onButtonDeclineClick,
    }),
    shallow
  );

  const handleButtonAcceptClick = () => {
    if (onButtonAcceptClick) onButtonAcceptClick();
  };
  const handleButtonDeclineClick = () => {
    if (onButtonDeclineClick) onButtonDeclineClick();
  };
  return (
    <ModalDefault
      isDisplayingModal={isDisplayingModal}
      toggleModal={toggleModal}
      title={title}
      descriptionShort={descriptionShort}
      descriptionLong={descriptionLong}
      buttonAcceptLabel={buttonAcceptLabel}
      buttonDeclineLabel={buttonDeclineLabel}
      onButtonAcceptClick={handleButtonAcceptClick}
      onButtonDeclineClick={handleButtonDeclineClick}
    />
  );
}
