import React from "react";
import IconPath from "./IconPath";
import TIcon from "../../typings/types/TIcon";

interface Props {
  icon: TIcon;
  className?: string;
  onClick?: () => void;
}

export default function Icon({ className, icon, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className}`}
      onClick={onClick}
    >
      <IconPath icon={icon} />
    </svg>
  );
}

Icon.defaultProps = {
  className: "h-12 w-12",
};
