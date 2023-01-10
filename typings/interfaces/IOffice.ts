import TOffices from "../types/TOfficeCity";

export default interface IOffice {
  city: TOffices;
  district: string;
  adress: {
    street: string;
    housenumber: string;
    postcode: number;
  };
  areaInSquareMetres: number;
  headcount: number;
  workstations: number;
  areDogsAllowed: boolean;
}
