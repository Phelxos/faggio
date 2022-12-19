import React from "react";
import IconPath from "./IconPath";
import TIcon from "../../typings/types/TIcon";

interface Props {
  icon: TIcon;
  className?: string;
}
export default function Icon({ className, icon }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className}`}
    >
      <IconPath icon={icon} />
    </svg>
  );
}

Icon.defaultProps = {
  className: "w-24 h-24",
};
