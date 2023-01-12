import React from "react";
import Icon from "../../icons/Icon";

export default function StatusUser() {
  const user = "wilhelm";
  return (
    <div className="flex items-center">
      <Icon className="mr-1 h-3 w-3 fill-slate-600" icon="user" />
      <p className="tracking-widest text-slate-500">
        {user.at(0)?.toUpperCase() + user.slice(1)}
      </p>
    </div>
  );
}
