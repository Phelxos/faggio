import React from "react";

interface Props {
  onInput: (e: any) => void;
  value: string;
}

export default function TeamsControlsBarInput({ onInput, value }: Props) {
  return (
    <input
      className="out m-4 h-[100px] grow rounded border-4 border-pink-400 bg-pink-300 px-4 text-4xl uppercase tracking-widest text-pink-900 caret-pink-900 opacity-75 outline-none focus:opacity-100"
      onInput={onInput}
      value={value}
    />
  );
}
