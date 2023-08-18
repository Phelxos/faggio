"use client";

import { FC } from "react";
import { Dialog } from "@headlessui/react";
import IModal from "../../../../typings/interfaces/IModal";
import Tile from "./Tile";
import Link from "next/link";

const Modal: FC<IModal> = ({ isDisplayingModal, toggleModal }) => {
  return (
    <Dialog
      className="fixed left-1/2 top-1/2 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-slate-900/50 backdrop-blur"
      open={isDisplayingModal}
      onClose={toggleModal}
    >
      <Dialog.Panel className="relative m-4 flex flex-col gap-8 rounded-b-lg rounded-t border-t-8 border-t-sky-300/50 bg-sky-900/75 p-4 drop-shadow-2xl sm:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <Dialog.Title className="text-center text-4xl font-thin text-sky-300/75">
          Mein Profil
        </Dialog.Title>
        <div className="grid h-full w-full grow grid-cols-2 gap-4">
          <Tile name="Profil" nameBoldBottom="ansehen" />
          <Tile name="Profil" nameBoldBottom="bearbeiten" />
          <Tile nameBoldTop="Farbschema" name="ändern" />
          <Tile name="weitere" nameBoldBottom="Einstellungen" />
        </div>
        <Link
          href="/login"
          className="w-full grow rounded-b-lg border-2 border-red-700/50 bg-sky-950 p-4 text-center font-mono uppercase tracking-widest text-red-500/75"
        >
          Abmelden
        </Link>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
