import TPageTitle from "../typings/types/TPageTitle";

export default function useNavIcon(page?: TPageTitle) {
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
}
