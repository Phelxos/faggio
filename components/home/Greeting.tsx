import React, { useEffect, useState } from "react";
import useGreeting from "../../stores/SGreeting";

export default function Greeting() {
  const greeting = useGreeting((s) => s.greeting);
  const languageInGerman = useGreeting((s) => s.languageInGerman);
  const user = "Wilhelm";
  return (
    <div className="w-full rounded bg-sky-600/50">
      <div className="flex items-end gap-2 bg-sky-900">
        <span className="text-3xl font-thin">{greeting}</span>
        {", "}
        <span>{user}</span>
      </div>
      <div>asldjfdölskjökl</div>
      <div className="bg-sky-900">
        {`„${greeting}“ bedeutet „Hallo“ in der Sprache `}
        <span className="italic">{languageInGerman}</span>.
      </div>
    </div>
  );
}
