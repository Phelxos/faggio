import type TIcon from "../../typings/types/TIcon";

interface IDataNavIcons {
  [key: string]: TIcon;
}

const dataNavIcons: IDataNavIcons = {
  home: "home",
  calendar: "calendarDays",
  bookings: "bookOpen",
  offices: "buildingOffice",
  teams: "userGroup",
};

export default dataNavIcons;
