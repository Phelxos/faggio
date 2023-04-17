import React, { useContext } from "react";
import { CBookings } from "../../../contexts/CBookings";
import Icon from "../../../icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function ButtonEdit(props: any) {
  return (
    <button
      {...props}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="pencil" className="h-12 w-12 fill-sky-700 p-2" />
    </button>
  );
}

function ButtonSave(props: any) {
  return (
    <button
      {...props}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-lime-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-100 to-lime-500 drop-shadow-xl duration-200 ease-in-out hover:border-lime-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <FontAwesomeIcon
        icon={faFloppyDisk}
        className="h-8 w-8 text-lime-900 opacity-75"
      />
    </button>
  );
}

function ButtonArrowUturnLeft(props: any) {
  return (
    <button
      {...props}
      className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-orange-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-200 to-orange-500 drop-shadow-xl duration-200 ease-in-out hover:border-orange-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="arrowUturnLeft" className="h-8 w-8 fill-orange-900/75" />
    </button>
  );
}

export default function CalEditControlButtons() {
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
    <div className="fixed right-4 bottom-4 flex w-fit items-center justify-end gap-4 rounded-full bg-white/[0.05] p-2 backdrop-blur-md">
      {c?.isBeingEdited ? (
        <>
          <ButtonArrowUturnLeft onClick={handleButtonArrowUturnLeftClick} />
          <ButtonSave onClick={handleButtonSaveClick} />
        </>
      ) : (
        <ButtonEdit onClick={handleButtonEditClick} />
      )}
    </div>
  );
}
