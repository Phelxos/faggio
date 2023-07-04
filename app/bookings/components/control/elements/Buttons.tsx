"use client";

import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { CBookings } from "../../../../../components/contexts/CBookings";
import Icon from "../../../../../components/icons/Icon";

interface ButtonProps {
  onClick: () => void;
}

const Edit: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="pencil" className="h-12 w-12 fill-sky-700 p-2" />
    </button>
  );
};

const Save: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-lime-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-100 to-lime-500 drop-shadow-xl duration-200 ease-in-out hover:border-lime-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <FontAwesomeIcon
        icon={faFloppyDisk}
        className="h-8 w-8 text-lime-900 opacity-75"
      />
    </button>
  );
};

const ArrowUturnLeft: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-orange-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-200 to-orange-500 drop-shadow-xl duration-200 ease-in-out hover:border-orange-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="arrowUturnLeft" className="h-8 w-8 fill-orange-900/75" />
    </button>
  );
};

const Buttons: FC = () => {
  const c = useContext(CBookings);

  const handleButtonSaveClick = () => {
    c?.transferBookingsToBeSavedToBookingsToStore();
    c?.transferBookingsToBeDeletedToBookingsToStore();
    c?.clearBookingsToBeSavedAndDeleted();
    c?.toggleIsBeingEdited();
  };

  const handleButtonArrowUturnLeftClick = () => {
    c?.clearBookingsToBeSavedAndDeleted();
    c?.toggleIsBeingEdited();
  };

  const handleButtonEditClick = () => {
    c?.toggleIsBeingEdited();
    if (
      c?.calRef?.current?.getBoundingClientRect().top &&
      0 > c?.calRef?.current?.getBoundingClientRect().top
    ) {
      c?.calRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-fit items-center justify-end gap-4 rounded-full bg-white/[0.05] p-2 backdrop-blur-md">
      {c?.isBeingEdited ? (
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
