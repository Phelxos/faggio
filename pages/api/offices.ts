import IOffice from "../../typings/interfaces/IOffice";

const offices: IOffice[] = [
  {
    city: "dortmund",
    district: "Schüren",
    adress: {
      street: "friedenspl.",
      housenumber: "1",
      postcode: "44135",
    },
    areaInSquareMetres: 1223,
    headcount: 67,
    workstations: 53,
    areDogsAllowed: true,
    description:
      "Im Osten Dortmunds gelegen lädt die viergeschossige Zentrale ins Herz adessos ein. Über 400 Mitarbeiter arbeiten hier täglich an der Zukunft der IT.",
    imgSrc: "/images/office.jpg",
  },
  {
    city: "hamburg",
    adress: {
      street: "rathausstraße",
      housenumber: "2",
      postcode: "20095",
    },
    areaInSquareMetres: 523,
    headcount: 23,
    workstations: 36,
    areDogsAllowed: false,
  },
  {
    city: "bremen",
    adress: {
      street: "am markt",
      housenumber: "21",
      postcode: "28195",
    },
    areaInSquareMetres: 231,
    headcount: 13,
    workstations: 11,
    areDogsAllowed: true,
  },
  {
    city: "berlin",
    adress: {
      street: "weinmeisterstraße",
      housenumber: "2",
      postcode: "10178",
    },
    areaInSquareMetres: 491,
    headcount: 41,
    workstations: 54,
    areDogsAllowed: false,
  },
  {
    city: "cologne",
    district: "bickendorf",
    adress: {
      street: "wilhelm-mauser-straße",
      housenumber: "14",
      postcode: "50827",
    },
    areaInSquareMetres: 443,
    headcount: 21,
    workstations: 36,
    areDogsAllowed: false,
  },
  {
    city: "leipzig",
    adress: {
      street: "markt",
      housenumber: "24",
      postcode: "04109",
    },
    areaInSquareMetres: 193,
    headcount: 9,
    workstations: 10,
    areDogsAllowed: false,
  },
  {
    city: "munich",
    adress: {
      street: "säbener str.",
      housenumber: "51",
      postcode: "81547",
    },
    areaInSquareMetres: 787,
    headcount: 23,
    workstations: 43,
    areDogsAllowed: false,
  },
  {
    city: "frankfurt",
    adress: {
      street: "sonnemannstraße",
      housenumber: "20",
      postcode: "60134",
    },
    areaInSquareMetres: 456,
    headcount: 24,
    workstations: 26,
    areDogsAllowed: true,
  },
];
export default function handler(req: any, res: any) {
  res.status(200).json(offices);
}
