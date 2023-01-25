import React from "react";
import Icon from "../../icons/Icon";
import TTheme from "../../../typings/types/TThemes";

interface IProps {
  color: TTheme;
}

export default function StatusUser({ color }: IProps) {
  const user = "wilhelm";

  return (
    <div className="flex items-center">
      <Icon className={`mr-1 h-3 w-3 fill-${color}-600`} icon="user" />
      <p className={`tracking-widest text-${color}-500`}>
        {user.at(0)?.toUpperCase() + user.slice(1)}
      </p>
    </div>
  );
}
