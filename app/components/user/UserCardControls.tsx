import React from "react";
import Icon from "../icons/Icon";

// NOTE For the moment, the "messenger" property of the ICoworker object is omitted, since you can use the email address to link to a Microsoft Teams chat.

export default function UserCardControls({
  className,
  phone,
  email,
}: {
  className?: string;
  phone: string;
  email: string;
}) {
  return (
    <div
      className={`col-span-2 flex items-center justify-around rounded-b-lg bg-pink-800/50 px-2 py-4 ${className}`}
    >
      <button>
        <a href={`tel:${phone}`}>
          <Icon
            icon="phone"
            className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
          />
        </a>
      </button>
      <button>
        <a href={`mailto:${email}`}>
          <Icon
            icon="envelope"
            className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
          />
        </a>
      </button>
      <button>
        <a href={`https://teams.microsoft.com/l/chat/0/0?users=${email}`}>
          <Icon
            icon="chatBubbleLeftRight"
            className="h-14 w-14 rounded-full border-2 border-slate-500/50 bg-slate-700 fill-pink-200 p-3 opacity-75 transition-all hover:bg-pink-200 hover:fill-pink-600 hover:opacity-100"
          />
        </a>
      </button>
    </div>
  );
}
