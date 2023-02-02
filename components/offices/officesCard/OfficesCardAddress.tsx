import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface Props {
  address: {
    street: string;
    housenumber: string;
    postcode: string;
  };
}

export default function OfficesCardAddress({ address }: Props) {
  return (
    <div>
      {Object.entries(address).map((item: [string, string]) => {
        const [key, value] = item;
        return (
          <div key={key}>
            {value}
            <FontAwesomeIcon icon={faCopy} className="mr-1 h-5 w-5" />
          </div>
        );
      })}
    </div>
  );
}
