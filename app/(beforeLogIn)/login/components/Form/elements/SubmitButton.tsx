"use client";

import { FC } from "react";

interface Props {
  isValid: boolean;
}

const SubmitButton: FC<Props> = ({ isValid }) => {
  return (
    <button
      type="submit"
      className={`focus:ring-none absolute bottom-0 left-0 right-0 h-1/6 w-full bg-slate-400 text-2xl font-bold uppercase tracking-widest text-slate-700/50 outline-offset-2 drop-shadow-xl transition-all duration-200 focus:bg-yellow-500/50 focus:text-yellow-600 focus:outline-none ${
        isValid && "bg-green-600 text-green-700"
      }`}
    >
      anmelden
    </button>
  );
};

export default SubmitButton;
