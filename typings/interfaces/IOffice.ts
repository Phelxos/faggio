import TOffices from "../types/TOfficeCity";

export default interface IOffice {
  city: TOffices;
  district?: string;
  adress: {
    street: string;
    housenumber: string;
    postcode: string;
  };
  areaInSquareMetres?: number;
  headcount: number;
  workstations: number;
  areDogsAllowed?: boolean;
  description?: string;
  imgSrc?: string;
  intranetUrl?: string;
}
