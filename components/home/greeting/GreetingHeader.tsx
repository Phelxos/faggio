import React from "react";
import useGreeting from "../../../stores/SGreeting";

export default function GreetingHeader() {
  const greeting = useGreeting((s) => s.greeting);
  const hasFetchedSuccesfully = useGreeting((s) => s.hasFetchedSuccessfully);
  const user = "Wilhelm";
  return (
    <div className="flex items-end gap-2 rounded-t bg-sky-900 p-5">
      <div>
        <span className="text-3xl font-thin text-sky-300">
          {hasFetchedSuccesfully ? greeting : "Hei"}
        </span>
        <span className="ml-1 font-light text-sky-300/50">,</span>
      </div>
      <div>
        <span className="font-bold tracking-wide text-sky-400/50">{user}</span>
        <span className=" ml-[2px] font-light text-sky-300/50">!</span>
      </div>
    </div>
  );
}
