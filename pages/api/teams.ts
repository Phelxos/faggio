import IColleague from "../../typings/interfaces/IColleague";

const allColleagues: IColleague[] = [
  {
    forename: "Noah",
    surname: "Bettac",
    office: "Dortmund",
  },
  {
    forename: "Sebastian",
    surname: "Sauer",
    office: "Dortmund",
  },
  {
    forename: "Kevin",
    surname: "Theermann",
    office: "Dortmund",
  },
  {
    forename: "Milad",
    surname: "Schukuri",
    office: "Dortmund",
  },
  {
    forename: "Heico",
    surname: "Joswig",
    office: "Dortmund",
  },
  {
    forename: "Julia",
    surname: "Preiß",
    office: "Dortmund",
  },
  {
    forename: "Jan",
    surname: "van Doren",
    office: "Dortmund",
  },
  {
    forename: "Krishnan",
    surname: "Sivapalan",
    office: "Dortmund",
  },
  {
    forename: "Nils",
    surname: "Gauditz",
    office: "Dortmund",
  },
  {
    forename: "Agim",
    surname: "Burniki",
    office: "Dortmund",
  },
  {
    forename: "Sascha",
    surname: "Blättgen",
    office: "Dortmund",
  },
  {
    forename: "Susanne",
    surname: "Gülikers",
    office: "Dortmund",
  },
  {
    forename: "Nadja",
    surname: "Hogl",
    office: "Dortmund",
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allColleagues);
}
