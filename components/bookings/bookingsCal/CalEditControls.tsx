import React, { useContext } from "react";
import { CBookings } from "../../contexts/CBookings";
import Icon from "../../icons/Icon";

function ButtonPlus(props: any) {
  return (
    <button
      {...props}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="pencil" className="h-12 w-12 fill-sky-700 p-2" />
    </button>
  );
}

function ButtonCheck(props: any) {
  return (
    <button
      {...props}
      className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-lime-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-100 to-lime-500 drop-shadow-xl duration-200 ease-in-out hover:border-lime-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="check" className="h-16 w-16 fill-lime-700 p-2" />
    </button>
  );
}

function ArrowUturnLeft(props: any) {
  return (
    <button
      {...props}
      className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-orange-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-200 to-red-500 drop-shadow-xl duration-200 ease-in-out hover:border-orange-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="arrowUturnLeft" className="h-8 w-8 fill-orange-900/75" />
    </button>
  );
}

export default function CalEditControls() {
  const c = useContext(CBookings);

  const handleButtonCheckClick = () => {
    c?.transferBookingsToBeSavedToBookingsToStore();
    c?.transferBookingsToBeDeletedToBookingsToStore();
    c?.clearBookingsToBeSavedAndDeleted();
    c?.toggleIsBeingEdited();
  };

  const handleArrowUturnLeftClick = () => {
    c?.clearBookingsToBeSavedAndDeleted();
    c?.toggleIsBeingEdited();
  };
  return (
    <div className="fixed right-0 bottom-0 z-50 m-2 flex items-center justify-end gap-4 rounded-full bg-white/[0.05] p-2 backdrop-blur-md">
      {c?.isBeingEdited ? (
        <>
          <ArrowUturnLeft onClick={handleArrowUturnLeftClick} />
          <ButtonCheck onClick={handleButtonCheckClick} />
        </>
      ) : (
        <ButtonPlus onClick={c?.toggleIsBeingEdited} />
      )}
    </div>
  );
}
