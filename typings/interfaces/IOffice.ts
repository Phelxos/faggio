import { TOfficeCityEnglish } from "../types/TOfficeCity";

export default interface IOffice {
  city: TOfficeCityEnglish;
  district?: string;
  address: {
    street: string;
    housenumber: string;
    postcode: string;
  };
  areaInSquareMetres: number;
  headcount: number;
  workstations: number;
  areDogsAllowed: boolean;
  description?: string;
  imgSrc?: string;
  intranetUrl?: string;
}
