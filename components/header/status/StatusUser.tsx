import React from "react";
import Icon from "../../icons/Icon";
import useAccount from "../../../stores/SAccount";
import useTheme from "../../../hooks/useTheme";
import capitaliseFirstLetter from "../../../helpers/capitaliseFirstLetter";

export default function StatusUser() {
  const user = useAccount((s) => s.forename);
  const currentTheme = useTheme();

  return (
    <div
      className={`relative flex items-center gap-1 overflow-hidden rounded-sm bg-${currentTheme}-500 py-2 pl-5 pr-8 shadow-sm`}
    >
      <Icon
        className={`h-8 w-8 fill-${currentTheme}-300 absolute -bottom-1 -left-3 opacity-25`}
        icon="user"
      />
      <p
        className={`text-md font-bold tracking-widest text-${currentTheme}-800`}
      >
        {capitaliseFirstLetter(user)}
      </p>
    </div>
  );
}
