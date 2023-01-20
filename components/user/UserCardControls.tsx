import React from "react";
import Icon from "../icons/Icon";
import useTheme from "../../hooks/useTheme";

export default function UserCardControls() {
  const theme = useTheme();
  return (
    <div className="col-span-2 flex items-center justify-around rounded-b-lg bg-pink-800/50 py-4 px-2">
      <button>
        <Icon
          icon="phone"
          className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
        />
      </button>
      <button>
        <Icon
          icon="envelope"
          className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
        />
      </button>
      <button>
        <Icon
          icon="chatBubbleLeftRight"
          className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
        />
      </button>
    </div>
  );
}
