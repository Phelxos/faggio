import React from "react";

export default function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <main className="flex h-full grow flex-col items-center justify-center bg-slate-800 p-2">
      {children}
    </main>
  );
}
