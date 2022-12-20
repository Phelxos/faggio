import React from "react";
import Link from "next/link";
import Icon from "../icons/Icon";
import type TPageTitle from "../../typings/types/TPageTitle";
import dataNavIcons from "../../data/DNavIcons";

interface Props {
  pageTitle: TPageTitle;
}

export default function NavItem({ pageTitle }: Props) {
  const drawnIcon = dataNavIcons[pageTitle];

  return (
    <Link
      href={`/${pageTitle}`}
      className="flex grow items-center justify-center py-4 opacity-50 hover:bg-slate-600 hover:opacity-100"
    >
      <Icon icon={drawnIcon} className="h-10 w-10 fill-slate-400" />
    </Link>
  );
}
