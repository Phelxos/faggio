exports.seed = async function (knex) {
  await knex("offices").del();
  await knex("offices").insert([
    {
      city: "dortmund",
      officeId: 10,
      district: "schueren",
      street: "friedenspl.",
      houseNumber: "1",
      postcode: "44135",
      areaInSquareMeters: 1223,
      headcount: 67,
      workstations: 53,
      areDogsAllowed: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
      imgSrc: "/images/office.jpg",
      intranetUrl: "https://www.qwant.com/",
    },
    {
      city: "hamburg",
      officeId: 11,
      street: "rathausstraße",
      houseNumber: "2",
      postcode: "20095",
      areaInSquareMeters: 523,
      headcount: 23,
      workstations: 36,
      areDogsAllowed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "bremen",
      officeId: 12,
      street: "am markt",
      houseNumber: "21",
      postcode: "28195",
      areaInSquareMeters: 231,
      headcount: 13,
      workstations: 30,
      areDogsAllowed: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "berlin",
      officeId: 13,
      street: "weinmeisterstraße",
      houseNumber: "2",
      postcode: "10178",

      areaInSquareMeters: 491,
      headcount: 41,
      workstations: 54,
      areDogsAllowed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "cologne",
      officeId: 14,
      district: "bickendorf",
      street: "wilhelm-mauser-straße",
      houseNumber: "14",
      postcode: "50827",
      areaInSquareMeters: 443,
      headcount: 21,
      workstations: 36,
      areDogsAllowed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "leipzig",
      officeId: 15,
      street: "markt",
      houseNumber: "24",
      postcode: "04109",
      areaInSquareMeters: 193,
      headcount: 9,
      workstations: 10,
      areDogsAllowed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "munich",
      officeId: 16,
      street: "säbener str.",
      houseNumber: "51",
      postcode: "81547",
      areaInSquareMeters: 787,
      headcount: 23,
      workstations: 43,
      areDogsAllowed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      city: "frankfurt",
      officeId: 17,
      street: "sonnemannstraße",
      houseNumber: "20",
      postcode: "60134",
      areaInSquareMeters: 456,
      headcount: 24,
      workstations: 26,
      areDogsAllowed: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus.",
    },
  ]);
};