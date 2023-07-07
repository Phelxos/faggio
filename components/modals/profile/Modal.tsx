"use client";

import { FC } from "react";
import { Dialog } from "@headlessui/react";
import IModal from "../../../typings/interfaces/IModal";
import Tile from "./Tile";

const Modal: FC<IModal> = ({ isDisplayingModal, toggleModal }) => {
  return (
    <Dialog
      className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50 backdrop-blur"
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="max-h-3/4 min-h-1/4 max-w-3/4 min-w-1/4 relative flex h-[500px] w-[300px] flex-col gap-8 rounded-b-lg rounded-t border-t-8 border-t-sky-300/50 bg-sky-900/75 p-4 drop-shadow-2xl">
        <Dialog.Title className="text-center text-4xl font-thin text-sky-300/75">
          Mein Profil
        </Dialog.Title>
        <div className="grid h-full w-full grow grid-cols-2 gap-4">
          <Tile name="Profil" nameBoldBottom="ansehen" />
          <Tile name="Profil" nameBoldBottom="bearbeiten" />
          <Tile nameBoldTop="Farbschema" name="ändern" />
          <Tile name="weitere" nameBoldBottom="Einstellungen" />
        </div>
        <div
          className="w-full grow rounded-b-lg border-2 border-red-700/50 bg-sky-950 p-4 text-center font-mono uppercase tracking-widest text-red-500/75"
          onClick={toggleModal}
        >
          Abmelden
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
