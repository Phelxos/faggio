import React from "react";
import { Dialog } from "@headlessui/react";
import capitaliseFirstLetter from "../../../../../helpers/capitaliseFirstLetter";

export default function Title({
  forename = "",
  surname = "",
}: {
  forename: string | undefined;
  surname: string | undefined;
}) {
  return (
    <Dialog.Title className="grid-row-1 col-span-2 flex w-full flex-col items-center gap-2">
      <span className="text-3xl font-thin tracking-widest text-pink-300/75">
        {capitaliseFirstLetter(forename || "")}
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-pink-300">
        {surname}
      </span>
    </Dialog.Title>
  );
}
