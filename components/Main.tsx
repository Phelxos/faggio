import React from "react";

export default function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <main className="flex h-fit grow flex-col items-center bg-slate-900 p-6">
      {children}
    </main>
  );
}
