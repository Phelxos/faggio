import React, { useEffect, useState } from "react";
import useGreeting from "../../stores/SGreeting";
import translateToGerman from "../../helpers/translateToGerman";
import Spinner from "../Spinner";

export default function Greeting() {
  const greeting = useGreeting((s) => s.greeting);
  const languageInGerman = useGreeting((s) => s.languageInGerman);
  return (
    <div className="w-full bg-sky-700">
      <div className="flex items-center gap-2">
        <span>{greeting}!</span>
        <span>{languageInGerman}</span>
      </div>
    </div>
  );
}
