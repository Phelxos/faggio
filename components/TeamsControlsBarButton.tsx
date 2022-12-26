import React, { useEffect, useState } from "react";
import Icon from "./icons/Icon";
import TIcon from "../typings/types/TIcon";

interface Props {
  icon: TIcon;
  isActiveButton: boolean;
  onClick?: () => void;
}

export default function TeamsControlsBarButton({
  icon,
  onClick,
  isActiveButton,
}: Props) {
  const [computedClassName, setComputedClassName] = useState("");

  useEffect(() => {
    if (isActiveButton) {
      setComputedClassName(
        "h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-200 bg-pink-500 fill-pink-200 py-4"
      );
    } else {
      setComputedClassName(
        "h-[100px] w-full grow flex-col items-center justify-center rounded border-4 border-pink-400 bg-pink-800 fill-pink-400 py-4 opacity-75 hover:bg-pink-400 hover:fill-pink-800 hover:opacity-100"
      );
    }
  }, [isActiveButton]);

  return (
    <button className="item-center jusftify-center flex grow flex-col">
      <Icon icon={icon} className={computedClassName} onClick={onClick} />
    </button>
  );
}
