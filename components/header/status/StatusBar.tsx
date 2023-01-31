import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StatusLocation from "./StatusLocation";
import StatusUser from "./StatusUser";
import TTheme from "../../../typings/types/TThemes";
import TPageTitle from "../../../typings/types/TPageTitle";
import useTheme from "../../../hooks/useTheme";

export default function StatusBar() {
  const router = useRouter();
  const [color, setColor] = useState<TTheme>("slate");
  const currentTheme = useTheme();

  useEffect(() => {
    const pageTitle: TPageTitle = router.pathname.slice(1)
      ? (router.pathname.slice(1) as TPageTitle)
      : "home";
    setColor(currentTheme || "slate");
  }, [router.pathname]);

  return (
    <div
      className={`flex items-center justify-between bg-${color}-700 py-1 px-3 text-xs`}
    >
      <StatusUser color={color} />
      <StatusLocation color={color} />
    </div>
  );
}
