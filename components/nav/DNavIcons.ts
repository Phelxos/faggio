import type TIcon from "../../typings/types/TIcon";

interface IDataNavIcons {
  [key: string]: TIcon;
}

const dataNavIcons: IDataNavIcons = {
  calendar: "calendarDays",
  bookings: "bookOpen",
  offices: "buildingOffice",
  team: "userGroup",
};

export default dataNavIcons;
