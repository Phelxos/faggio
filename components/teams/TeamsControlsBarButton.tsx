import React, { useEffect, useState } from "react";
import Icon from "../icons/Icon";
import TIcon from "../../typings/types/TIcon";

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
        "w-16 h-full flex grow flex-col grow items-center justify-center rounded-b-lg border-2 border-pink-200/75 bg-pink-500"
      );
    } else {
      setComputedClassName(
        "w-16 grow flex flex-col h-full items-center justify-center rounded-b-lg border-2 border-pink-400/50 bg-pink-800 opacity-75"
      );
    }
  }, [isActiveButton]);

  return (
    <button className={computedClassName} onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
}
