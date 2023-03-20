import React, { useEffect } from "react";
import useModal from "../../hooks/useModal";
import useTheme from "../../hooks/useTheme";
import Icon from "../icons/Icon";
import { Dialog } from "@headlessui/react";

interface Props {
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  buttonAcceptLabel: string;
  onButtonAcceptClick?: () => void;
  buttonDeclineLabel: string;
  onButtonDeclineClick?: () => void;
}

export default function Modal({
  title,
  descriptionShort,
  descriptionLong,
  buttonAcceptLabel,
  onButtonAcceptClick,
  buttonDeclineLabel,
  onButtonDeclineClick,
}: Props) {
  const { toggleModal, isDisplayingModal } = useModal();

  const handleButtonAcceptClick = () => {
    toggleModal();
    if (onButtonAcceptClick) onButtonAcceptClick();
  };
  const handleButtonDeclineClick = () => {
    toggleModal();
    if (onButtonDeclineClick) onButtonDeclineClick();
  };

  return (
    <Dialog
      className={`fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur`}
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 flex h-[500px] w-[300px] flex-col items-center justify-between rounded-t rounded-b-xl border-t-8 border-t-sky-300/50 bg-sky-900/80 px-6 pt-4 pb-8 drop-shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <Dialog.Title className="text-2xl font-extralight tracking-widest text-sky-300">
            {title}
          </Dialog.Title>
          <Dialog.Description className="flex items-center gap-2 rounded-lg bg-sky-600/50 px-2 py-1 text-sm font-bold tracking-wider text-black/75 drop-shadow-md">
            <Icon
              icon="informationCircle"
              className="h-20 w-20 fill-black/25"
            />
            <p>{descriptionShort}</p>
          </Dialog.Description>
        </div>
        <div className="flex grow flex-col items-center justify-center p-2 text-lg text-sky-200/75">
          <p>{descriptionLong}</p>
        </div>
        <div className="flex w-full items-stretch gap-4">
          <button
            className="w-1/2 rounded bg-sky-500 p-4 font-mono text-sm font-bold uppercase tracking-wider text-black/75 drop-shadow-xl"
            onClick={handleButtonAcceptClick}
          >
            {buttonAcceptLabel}
          </button>
          <button
            className="w-1/2 rounded border-2 border-sky-200/75 p-4 font-mono text-sm uppercase tracking-wider text-white/75 drop-shadow-xl"
            onClick={handleButtonDeclineClick}
          >
            {buttonDeclineLabel}
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

Modal.defaultProps = {
  title: "Deactivate account",
  descriptionShort: "This will permanently deactivate your account",
  descriptionLong:
    "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
  buttonAcceptLabel: "Deactivate",
  buttonDeclineLabel: "Cancel",
};
