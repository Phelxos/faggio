import { TOfficeCityEnglish } from "../types/TOfficeCity";

export default interface IOffice {
  city: TOfficeCityEnglish;
  officeId: number;
  district?: string;
  address: {
    street: string;
    houseNumber: string;
    postcode: string;
  };
  areaInSquareMeters?: number;
  headcount?: number;
  workstations?: number;
  areDogsAllowed?: boolean;
  description?: string;
  imgSrc?: string;
  intranetUrl?: string;
}
