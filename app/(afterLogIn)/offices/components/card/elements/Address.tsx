"use client";

import { FC } from "react";
import Icon from "../../../../../components/icons/Icon";
import copyAddressToClipboard from "../../../../../../hooks/useCopyClipboardForAdresses";
import useCopyClipboardForAddresses from "../../../../../../hooks/useCopyClipboardForAdresses";

interface Props {
  street: string;
  houseNumber: string;
  postcode: string;
  city: string;
}

const Address: FC<Props> = ({ street, houseNumber, postcode, city }) => {
  const copyToClipboard = useCopyClipboardForAddresses();
  return (
    <div className="rounded-lg border-2 border-amber-800 bg-amber-600">
      <div className="flex items-center justify-between bg-amber-900/90 p-4">
        <span className="ml-1 text-lg font-extralight tracking-widest text-amber-400/75">
          Adresse
        </span>
        <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
          <Icon
            icon="documentDuplicate"
            className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-600 opacity-75 active:bg-amber-700"
            onClick={() => copyToClipboard(street, houseNumber, postcode, city)}
          />
        </button>
      </div>
      <div className="flex w-full flex-col gap-1 p-4">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xs font-semibold uppercase tracking-widest text-amber-900">
              {street} {houseNumber}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyToClipboard(street, houseNumber)}
            />
          </button>
        </div>
        <hr className="my-2 border-amber-900 opacity-25" />
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full text-right">
            <span className="break-all text-xl font-thin uppercase text-amber-900">
              {postcode} {city}
            </span>
          </div>
          <button className="flex flex-col items-center justify-center rounded-full active:bg-amber-400">
            <Icon
              icon="documentDuplicate"
              className="h-8 w-8 rounded-full bg-amber-700/50 p-2 text-amber-900 opacity-75"
              onClick={() => copyToClipboard(postcode, city)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
