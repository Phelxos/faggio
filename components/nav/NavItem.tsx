import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavActiveLink from "./NavActiveLink";
import Icon from "../icons/Icon";
import type TPageTitle from "../../typings/types/TPageTitle";
import dataNavIcons from "../../data/DNavIcons";

interface Props {
  pageTitle: TPageTitle;
}

export default function NavItem({ pageTitle }: Props) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [computedClassNameIcon, setComputedClassNameIcon] = useState("");

  const handleMouse = {
    over: () => setIsHovering(true),
    out: () => setIsHovering(false),
  };

  let drawnIcon = pageTitle ? dataNavIcons[pageTitle] : "home";

  let activeClassNames = {
    link: "",
    icon: "",
  };
  let hoverClassNames = {
    link: "",
    icon: "",
  };

  switch (pageTitle) {
    case "calendar":
      activeClassNames = {
        link: "border-b-emerald-400",
        icon: "fill-emerald-400",
      };
      hoverClassNames = {
        link: "hover:border-b-emerald-400 hover:bg-emerald-800",
        icon: "fill-emerald-400",
      };
      break;
    case "bookings":
      activeClassNames = {
        link: "border-b-amber-400",
        icon: "fill-amber-400",
      };
      hoverClassNames = {
        link: "hover:border-b-amber-400 hover:bg-amber-900",
        icon: "fill-amber-400",
      };
      break;
    case "":
      activeClassNames = {
        link: "border-b-slate-200",
        icon: "fill-slate-200",
      };
      hoverClassNames = {
        link: "hover:border-b-slate-400 hover:bg-slate-500",
        icon: "fill-slate-800",
      };
      break;
    case "offices":
      activeClassNames = {
        link: "border-b-sky-300",
        icon: "fill-sky-300",
      };
      hoverClassNames = {
        link: "hover:border-b-sky-300 hover:bg-sky-700",
        icon: "fill-sky-300",
      };
      break;
    case "teams":
      activeClassNames = {
        link: "border-b-pink-400",
        icon: "fill-pink-400",
      };
      hoverClassNames = {
        link: "hover:border-b-pink-400 hover:bg-pink-900",
        icon: "fill-pink-400",
      };
      break;
  }

  useEffect(() => {
    console.log(pageTitle);
    if (router.pathname === `/${pageTitle}`) {
      setComputedClassNameIcon(`h-10 w-10 ${activeClassNames.icon}`);
    } else if (isHovering) {
      setComputedClassNameIcon(`h-10 w-10 ${hoverClassNames.icon}`);
    } else {
      setComputedClassNameIcon("h-10 w-10 fill-slate-400");
    }
  }, [isHovering, router.pathname]);

  return (
    <NavActiveLink
      href={`/${pageTitle}`}
      className={`flex grow items-center justify-center border-b-4 border-slate-500 py-4 opacity-50 transition hover:opacity-100 ${hoverClassNames.link}`}
      activeClassName={activeClassNames.link}
      onMouseOver={handleMouse.over}
      onMouseOut={handleMouse.out}
    >
      <Icon icon={drawnIcon} className={computedClassNameIcon} />
    </NavActiveLink>
  );
}
