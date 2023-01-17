import React, { useContext, useEffect, useState } from "react";
import { CTeams } from "../contexts/CTeams";

interface Props {
  onInput: (e: any) => void;
  value: string;
}

export default function TeamsControlsBarInput({ onInput, value }: Props) {
  const context = useContext(CTeams);
  const [borderColor, setBorderColor] = useState(200);

  useEffect(() => {
    if (context?.searchForUser?.length! > 0) {
      setBorderColor(700);
    } else {
      setBorderColor(200);
    }
  }, [context?.searchForUser]);

  return (
    <input
      className={`border-pink-${borderColor} flex h-full w-full grow flex-col justify-center rounded-lg border-2 bg-pink-500 px-4 text-4xl uppercase tracking-widest text-pink-900 caret-pink-900 outline-none placeholder:font-light placeholder:text-pink-200 placeholder:opacity-50`}
      onInput={onInput}
      value={value}
      placeholder="Suchen…"
    />
  );
}
