import React from "react";
import Icon from "../../icons/Icon";
import useAccount from "../../../stores/SAccount";
import useTheme from "../../../hooks/useTheme";
import capitaliseFirstLetter from "../../../helpers/capitaliseFirstLetter";

export default function StatusUser() {
  const user = useAccount((s) => s.forename);
  const currentTheme = useTheme();

  return (
    <div className="flex items-center">
      <Icon className={`mr-1 h-3 w-3 fill-${currentTheme}-600`} icon="user" />
      <p className={`tracking-widest text-${currentTheme}-500`}>
        {capitaliseFirstLetter(user)}
      </p>
    </div>
  );
}
