import type TIcon from "../typings/types/TIcon";

interface IDataNavIcons {
  [key: string]: TIcon;
}

const dataNavIcons: IDataNavIcons = {
  bookings: "calendarDays",
  offices: "buildingOffice",
  teams: "userGroup",
};

export default dataNavIcons;
