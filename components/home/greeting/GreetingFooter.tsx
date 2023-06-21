import React from "react";
import useGreeting from "../../../stores/SGreeting";
import Icon from "../../icons/Icon";

export default function GreetingFooter() {
  const greeting = useGreeting((s) => s.greeting);
  const hasFetchedSuccesfully = useGreeting((s) => s.hasFetchedSuccessfully);
  const language = useGreeting((s) => s.language);

  return (
    <div className="relative flex items-center justify-end gap-1 rounded-b bg-sky-900 px-2 py-3 text-xs text-sky-400/50">
      {hasFetchedSuccesfully && (
        <>
          <div>
            <span className="italic">{greeting}</span> bedeutet „
            <span>Hallo</span>“ auf{" "}
          </div>
          <a
            className="mx-1 flex items-center gap-1 rounded bg-sky-800 p-[6px] text-sky-300/75"
            href={`https://www.google.de/search?q=${language.toLocaleLowerCase()}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>{language}</span>
            <Icon icon="arrowTopRightOnSquare" className="h-4 w-4 opacity-50" />
          </a>
        </>
      )}
    </div>
  );
}
