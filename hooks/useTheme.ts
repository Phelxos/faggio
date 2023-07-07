import { usePathname } from "next/navigation";
import TPageTitle from "../typings/types/TPageTitle";
import TTheme from "../typings/types/TThemes";

const pageTitleToTheme = new Map<TPageTitle, TTheme>([
  ["home", "slate"],
  ["bookings", "emerald"],
  ["teams", "pink"],
  ["offices", "amber"],
]);

const useTheme = (): TTheme => {
  const pathname = usePathname();
  // pathname without the slash
  const adjustedPathname: TPageTitle =
    pathname === "/" ? "home" : (pathname?.slice(1) as TPageTitle);
  return pageTitleToTheme.get(adjustedPathname) ?? "slate";
};

export default useTheme;
