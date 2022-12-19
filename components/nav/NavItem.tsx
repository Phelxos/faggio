import React from "react";
import Link from "next/link";
import Icon from "../icons/Icon";
import type TPageTitle from "../../typings/types/TPageTitle";
import dataNavIcons from "./DNavIcons";

interface Props {
  pageTitle: TPageTitle;
}

export default function NavItem({ pageTitle }: Props) {
  const drawnIcon = dataNavIcons[pageTitle] || "home";
  return (
    <Link href={`/${pageTitle}`}>
      <Icon icon={drawnIcon} className="h-6 w-6" />
    </Link>
  );
}
