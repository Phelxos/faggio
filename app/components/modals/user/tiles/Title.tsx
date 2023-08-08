import { FC } from "react";
import { Dialog } from "@headlessui/react";
import capitaliseFirstLetter from "../../../../../helpers/capitaliseFirstLetter";

interface Props {
  forename: string | undefined;
  surname: string | undefined;
}

const Title: FC<Props> = ({ forename = "", surname = "" }) => {
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
};

export default Title;
