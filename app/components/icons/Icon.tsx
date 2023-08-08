import { FC } from "react";
import TIcon from "../../../typings/types/TIcon";
import Path from "./Path";

interface Props {
  icon: TIcon;
  className?: string;
  isActive?: boolean;
  activeClassName?: string;
  onClick?: () => void;
}

const Icon: FC<Props> = ({
  className = "h-12 w-12",
  icon,
  onClick,
  isActive,
  activeClassName,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} ${isActive && activeClassName}`}
      onClick={onClick}
    >
      <Path icon={icon} />
    </svg>
  );
};

export default Icon;
