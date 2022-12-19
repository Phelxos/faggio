import React from "react";
import Link from "next/link";
import Icon from "../icons/Icon";
import type TPageTitle from "../../typings/types/TPageTitle";
import dataNavIcons from "./DNavIcons";

interface Props {
  pageTitle: TPageTitle;
}

export default function NavItem({ pageTitle }: Props) {
  const drawnIcon = dataNavIcons[pageTitle];

  return (
    <Link
      href={`/${pageTitle}`}
      className="grow hover:bg-emerald-500 hover:opacity-100 flex items-center opacity-50 justify-center py-4"
    >
      <Icon icon={drawnIcon} className="w-10 h-10 fill-emerald-200" />
    </Link>
  );
}
