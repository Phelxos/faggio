import React, { useEffect, useState } from "react";
import useGreeting from "../../stores/SGreeting";
import Icon from "../icons/Icon";

export default function Greeting() {
  const greeting = useGreeting((s) => s.greeting);
  const hasGreetingLoaded = useGreeting((s) => s.hasLoaded);
  const languageInGerman = useGreeting((s) => s.languageInGerman);
  const user = "Wilhelm";

  return (
    <div className="w-full rounded bg-sky-600/50">
      <div className="flex items-end gap-2 rounded-t bg-sky-900 p-3">
        <div>
          <span className="text-3xl font-thin text-sky-300">
            {hasGreetingLoaded ? greeting : "Hei"}
          </span>
          <span className="ml-1 font-light text-sky-300/50">,</span>
        </div>
        <div>
          <span className="font-bold tracking-wide text-sky-400/50">
            {user}
          </span>
          <span className=" ml-[2px] font-light text-sky-300/50">!</span>
        </div>
      </div>
      <div>asldjfdölskjökl</div>
      <div className="relative flex items-center justify-center gap-1 rounded-b bg-sky-900 p-2 text-xs text-sky-400/50">
        {hasGreetingLoaded && (
          <>
            <div>
              <span className="italic">{greeting}</span> bedeutet „
              <span>Hallo</span>“ in der Sprache{" "}
            </div>
            <a
              className="mx-1 flex items-center gap-1 rounded bg-sky-800 p-[6px] text-sky-300/75"
              href={`https://www.google.de/search?q=${languageInGerman}`}
            >
              <span>{languageInGerman}</span>
              <Icon
                icon="arrowTopRightOnSquare"
                className="h-4 w-4 opacity-50"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
