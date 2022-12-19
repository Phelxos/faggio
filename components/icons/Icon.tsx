import React from "react";
import dataIconDrawn from "./DIconDrawn";
import IIcon from "../../typings/interfaces/IIcon";

export default function IconUser({ className, drawn }: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className}`}
    >
      <path fillRule="evenodd" d={dataIconDrawn[drawn]} clipRule="evenodd" />
    </svg>
  );
}
