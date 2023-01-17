import TLocation from "../types/TOfficeCity";

export default interface IColleague {
  forename: string;
  surname: string;
  office: TLocation;
  imgSrc?: string;
  id: number;
}
