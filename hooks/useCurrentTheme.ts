import { useRouter } from "next/router";
import TTheme from "../typings/types/TThemes";
import TPageTitle from "../typings/types/TPageTitle";

const pageTitleToTheme = new Map<TPageTitle, TTheme>([
  ["home", "slate"],
  ["bookings", "emerald"],
  ["teams", "pink"],
  ["offices", "amber"],
]);

export default function useCurrentTheme() {
  const { pathname } = useRouter();
  // pathname without the slash
  const adjustedPathname: TPageTitle =
    pathname === "/" ? "home" : (pathname.slice(1) as TPageTitle);
  return pageTitleToTheme.get(adjustedPathname);
}
