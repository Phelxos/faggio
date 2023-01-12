import TTheme from "./TThemes";

type TPageTitle = "" | "home" | "bookings" | "offices" | "teams";

export const pageTitleToTheme = new Map<TPageTitle, TTheme>([
  ["home", "slate"],
  ["bookings", "emerald"],
  ["teams", "pink"],
  ["offices", "amber"],
]);

export default TPageTitle;
