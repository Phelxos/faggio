import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StatusLocation from "./StatusLocation";
import StatusUser from "./StatusUser";
import TTheme from "../../../typings/types/TThemes";

export default function StatusBar() {
  const router = useRouter();
  const [color, setColor] = useState<TTheme>("slate");

  useEffect(() => {
    console.log(router);
  }, [router.pathname]);
  return (
    <div className="flex items-center justify-between bg-slate-700 py-1 px-3 text-xs">
      <StatusUser />
      <StatusLocation color={color} />
    </div>
  );
}
