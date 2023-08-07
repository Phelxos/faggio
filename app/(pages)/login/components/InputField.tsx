"use client";

import { FC, useState } from "react";
import Icon from "../../../../components/icons/Icon";
import TIcon from "../../../../typings/types/TIcon";

interface Props {
  type?: string;
  placeholder?: string;
  id: string;
  label?: string;
  icon?: TIcon;
}

const InputField: FC<Props> = ({
  type = "text",
  placeholder = "Platzhalter",
  id = "",
  label = "Beschriftung",
  icon = "informationCircle",
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex w-full flex-col-reverse">
      <input
        className={`${
          type === "password" &&
          "placeholder:font-mono placeholder:tracking-wider"
        } text-slate-8 peer w-full rounded-lg border-4 border-slate-500 bg-slate-400 p-3 shadow-inner placeholder:text-slate-600/50 focus:border-transparent focus:bg-violet-300 focus:text-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-700 focus:placeholder:text-violet-600/50`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label
        htmlFor={id}
        className="ml-2 flex w-3/5 items-center gap-2 rounded-t-lg bg-slate-500 py-1 pl-3 text-lg tracking-widest text-slate-300 peer-focus:bg-violet-700 peer-focus:text-violet-300"
      >
        {icon && (
          <Icon icon={icon} className="inline-block h-4 w-4 opacity-50" />
        )}
        {label}
      </label>
    </div>
  );
};

export default InputField;
