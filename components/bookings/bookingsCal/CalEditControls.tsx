import React, { useContext } from "react";
import { ContextBookings } from "../../contexts/ContextBookings";
import Icon from "../../icons/Icon";

function ButtonPlus(props: any) {
  return (
    <button
      {...props}
      className="flex flex-col items-center justify-center rounded-full border-4 border-sky-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 drop-shadow-xl duration-200 ease-in-out hover:border-sky-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="plus" className="h-16 w-16 fill-sky-700 p-2" />
    </button>
  );
}

function ButtonCheck(props: any) {
  return (
    <button
      {...props}
      className="flex flex-col items-center justify-center rounded-full border-4 border-emerald-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 to-green-500 drop-shadow-xl duration-200 ease-in-out hover:border-emerald-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="check" className="h-16 w-16 fill-emerald-700 p-2" />
    </button>
  );
}

function ButtonXMark(props: any) {
  return (
    <button
      {...props}
      className="flex flex-col items-center justify-center rounded-full border-4 border-rose-700/75 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-200 to-red-500 drop-shadow-xl duration-200 ease-in-out hover:border-rose-900 active:translate-y-0.5 active:drop-shadow-md"
    >
      <Icon icon="xMark" className="h-16 w-16 fill-rose-900 p-2" />
    </button>
  );
}

export default function CalEditControls() {
  const context = useContext(ContextBookings);
  return (
    <div className="fixed right-0 bottom-0 flex items-center justify-end gap-4 p-4">
      {context?.isBeingEdited ? (
        <>
          <ButtonXMark onClick={context?.clearBookingsToBeSaved} />
          <ButtonCheck
            onClick={context?.transferBookingsToBeSavedToBookingsInStore}
          />
        </>
      ) : (
        <ButtonPlus onClick={context?.toggleIsBeingEdited} />
      )}
    </div>
  );
}
