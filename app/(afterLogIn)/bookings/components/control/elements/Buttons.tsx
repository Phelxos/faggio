"use client";

import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { Context as BookingsContext } from "../../../Context";
import Icon from "../../../../../components/icons/Icon";
import useAccount from "../../../../../../stores/SAccount";

const dimensions = {
  button: "h-16 w-16 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24",
  icons: {
    edit: "h-12 w-12 lg:h-14 lg:w-14",
    save: "h-8 w-8 lg:h-10 lg:w-10",
    arrowUturnLeft: "h-8 w-8 lg:h-10 lg:w-10",
  },
};

interface ButtonProps {
  onClick: () => void;
}

const Edit: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${dimensions.button} flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-200
      `}
    >
      <Icon
        icon="pencil"
        className={`${dimensions.icons.edit} fill-sky-700 p-2`}
      />
    </button>
  );
};

const Save: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${dimensions.button} flex-col items-center justify-center rounded-full border-4 border-lime-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-100 to-lime-500 drop-shadow-xl duration-200 ease-in-out hover:border-lime-200`}
    >
      <FontAwesomeIcon
        icon={faFloppyDisk}
        className={`${dimensions.icons.save} text-lime-900 opacity-75`}
      />
    </button>
  );
};

const ArrowUturnLeft: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex ${dimensions.button} flex-col items-center justify-center rounded-full border-4 border-orange-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-200 to-orange-500 drop-shadow-xl duration-200 ease-in-out hover:border-orange-200`}
    >
      <Icon
        icon="arrowUturnLeft"
        className={`${dimensions.icons.arrowUturnLeft} fill-orange-900/75`}
      />
    </button>
  );
};

const Buttons: FC = () => {
  const context = useContext(BookingsContext);
  const isOpenModalOverFullScreen = useAccount((s) => s.isOpenModal);

  const handleButtonSaveClick = () => {
    context?.transferBookingsToBeSavedToBookingsToStore();
    context?.transferBookingsToBeDeletedToBookingsToStore();
    context?.clearBookingsToBeSavedAndDeleted();
    context?.toggleIsBeingEdited();
  };

  const handleButtonArrowUturnLeftClick = () => {
    context?.clearBookingsToBeSavedAndDeleted();
    context?.toggleIsBeingEdited();
  };

  const handleButtonEditClick = () => {
    context?.toggleIsBeingEdited();
    if (
      context?.calRef?.current?.getBoundingClientRect().top &&
      0 > context?.calRef?.current?.getBoundingClientRect().top
    ) {
      context?.calRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return isOpenModalOverFullScreen ? null : (
    <div className="fixed bottom-4 right-4 z-50 flex w-fit items-center justify-end gap-4 rounded-full bg-white/[0.05] p-3 backdrop-blur-md lg:bottom-6 lg:right-6 lg:p-4">
      {context?.isBeingEdited ? (
        <>
          <ArrowUturnLeft onClick={handleButtonArrowUturnLeftClick} />
          <Save onClick={handleButtonSaveClick} />
        </>
      ) : (
        <Edit onClick={handleButtonEditClick} />
      )}
    </div>
  );
};

export default Buttons;
