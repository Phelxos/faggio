import React from "react";

export default function Main({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <main>{children}</main>;
}
