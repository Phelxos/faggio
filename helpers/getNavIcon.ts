import TIcon from "../typings/types/TIcon";
import TPageTitle from "../typings/types/TPageTitle";

const getNavIcon = (page?: TPageTitle): TIcon => {
  switch (page) {
    case "bookings":
      return "calendarDays";
    case "offices":
      return "buildingOffice";
    case "teams":
      return "userGroup";
    default:
      return "home";
  }
};

export default getNavIcon;
