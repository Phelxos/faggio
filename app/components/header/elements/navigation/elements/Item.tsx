"use client";

import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Icon from "../../../../../../components/icons/Icon";
import useNavIcon from "../../../../../../helpers/getNavIcon";
import type TPageTitle from "../../../../../../typings/types/TPageTitle";
import ActiveLink from "./ActiveLink";
import { usePathname } from "next/navigation";

interface Props {
  pageTitle: TPageTitle;
}

const Item: FC<Props> = ({ pageTitle }) => {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);
  const [computedClassNameIcon, setComputedClassNameIcon] = useState("");
  const drawnIcon = useNavIcon(pageTitle);

  const handleMouse = {
    over: () => setIsHovering(true),
    out: () => setIsHovering(false),
  };

  let activeClassNames = {
    link: "",
    icon: "",
  };
  let hoverClassNames = {
    link: "",
    icon: "",
  };

  switch (pageTitle) {
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
    case "bookings":
      activeClassNames = {
        link: "border-b-emerald-400",
        icon: "fill-emerald-400",
      };
      hoverClassNames = {
        link: "hover:border-b-emerald-400 hover:bg-emerald-800",
        icon: "fill-emerald-400",
      };
      break;
    case "offices":
      activeClassNames = {
        link: "border-b-amber-400",
        icon: "fill-amber-400",
      };
      hoverClassNames = {
        link: "hover:border-b-amber-400 hover:bg-amber-900",
        icon: "fill-amber-400",
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
    if (pathname === `/${pageTitle}`) {
      setComputedClassNameIcon(`h-10 w-10 ${activeClassNames.icon}`);
    } else if (isHovering) {
      setComputedClassNameIcon(`h-10 w-10 ${hoverClassNames.icon}`);
    } else {
      setComputedClassNameIcon("h-10 w-10 fill-slate-400");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering, pathname]);

  return (
    <ActiveLink
      href={`/${pageTitle}`}
      className={`flex grow items-center justify-center border-b-4 border-slate-500 py-3 opacity-50 transition hover:opacity-100 ${hoverClassNames.link}`}
      activeClassName={activeClassNames.link}
      onMouseOver={handleMouse.over}
      onMouseOut={handleMouse.out}
    >
      <Icon icon={drawnIcon} className={computedClassNameIcon} />
    </ActiveLink>
  );
};

export default Item;
