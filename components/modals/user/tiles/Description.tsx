import React from "react";
import { Dialog } from "@headlessui/react";
import Icon from "../../../icons/Icon";
import type TPosition from "../../../../typings/types/TPosition";

export default function Description({
  position,
}: {
  position: TPosition | undefined;
}) {
  return (
    <Dialog.Description className="grid-row-2 col-span-4 flex w-full items-center gap-2 rounded-2xl bg-pink-600/50 px-3 py-2 drop-shadow-md">
      <Icon icon="briefcase" className="h-8 w-8 fill-pink-900" />
      <span className="grow text-center font-bold tracking-widest text-pink-300/75">
        {position}
      </span>
    </Dialog.Description>
  );
}
