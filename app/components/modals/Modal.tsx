"use client";

import { Dialog } from "@headlessui/react";
import IModal from "../../../typings/interfaces/IModal";
import Icon from "../icons/Icon";
import { FC } from "react";

const Modal: FC<IModal> = ({
  isDisplayingModal,
  toggleModal,
  title = "Dialog",
  descriptionShort = "ein Dialog, der vom Nutzer eine Aktion erwartet",
  descriptionLong = "Hier können Sie die Aktion genauer beschreiben – ebenso, warum der Nutzer zu dieser Aktion aufgefordert wird.",
  buttonAcceptLabel = "annehmen",
  onButtonAcceptClick,
  buttonDeclineLabel = "ablehnen",
  onButtonDeclineClick,
}) => {
  const handleButtonAcceptClick = () => {
    if (onButtonAcceptClick) onButtonAcceptClick();
    toggleModal();
  };
  const handleButtonDeclineClick = () => {
    if (onButtonDeclineClick) onButtonDeclineClick();
    toggleModal();
  };
  return (
    <Dialog
      className={`fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur`}
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 flex h-[500px] w-[300px] flex-col items-center justify-between rounded-b-xl rounded-t border-t-8 border-t-sky-300/50 bg-sky-900/80 px-6 pb-8 pt-4 drop-shadow-2xl">
        <Dialog.Title className="text-4xl font-thin tracking-widest text-sky-300">
          {title}
        </Dialog.Title>
        <Dialog.Description className="flex items-center gap-2 rounded bg-sky-600/50 px-2 py-1 text-sm font-bold tracking-wider text-black/75 drop-shadow-md">
          <Icon icon="informationCircle" className="h-20 w-20 fill-black/25" />
          <p>{descriptionShort}</p>
        </Dialog.Description>
        <div className="flex flex-col items-center justify-center p-2 text-lg text-sky-200/75">
          <p>{descriptionLong}</p>
        </div>
        <div className="flex w-full items-stretch gap-4">
          <button
            className="w-1/2 rounded-lg bg-sky-500 p-4 font-mono text-sm font-bold uppercase tracking-wider text-black/75 drop-shadow-xl"
            onClick={handleButtonAcceptClick}
          >
            {buttonAcceptLabel}
          </button>
          <button
            className="w-1/2 rounded-lg border-2 border-sky-200/75 p-4 font-mono text-sm uppercase tracking-wider text-white/75 drop-shadow-xl"
            onClick={handleButtonDeclineClick}
          >
            {buttonDeclineLabel}
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
