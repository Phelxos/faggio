import React from "react";

export default function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <main className="flex h-fit grow flex-col items-center bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-6">
      {children}
    </main>
  );
}
