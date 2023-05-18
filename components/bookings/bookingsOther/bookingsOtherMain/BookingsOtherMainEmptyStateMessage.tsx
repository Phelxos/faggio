import React from "react";
import Icon from "../../../icons/Icon";

export default function BookingsOtherMainEmtpyStateMessage({
  darker,
}: {
  darker?: boolean;
}) {
  return (
    <>
      <Icon
        icon="xMark"
        className={`absolute right-0 top-0 h-20 w-20 ${
          darker ? "fill-slate-400" : "fill-slate-200"
        } opacity-20`}
      />
      <span
        className={`text-center font-mono text-lg ${
          darker ? "text-slate-300" : "text-slate-100"
        } opacity-75`}
      >
        keine Buchungen
      </span>
    </>
  );
}
