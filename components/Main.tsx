import React from "react";

export default function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <main className="flex h-full grow flex-col items-center bg-slate-800 py-6">
      {children}
    </main>
  );
}
