import IColleague from "../../typings/interfaces/IColleague";

const allColleagues: IColleague[] = [
  {
    forename: "noah",
    surname: "bettac",
    office: "dortmund",
  },
  {
    forename: "sebastian",
    surname: "sauer",
    office: "dortmund",
  },
  {
    forename: "kevin",
    surname: "theermann",
    office: "dortmund",
  },
  {
    forename: "milad",
    surname: "schukuri",
    office: "dortmund",
  },
  {
    forename: "heico",
    surname: "joswig",
    office: "dortmund",
  },
  {
    forename: "julia",
    surname: "preiß",
    office: "dortmund",
  },
  {
    forename: "jan",
    surname: "van doren",
    office: "dortmund",
  },
  {
    forename: "krishnan",
    surname: "sivapalan",
    office: "dortmund",
  },
  {
    forename: "nils",
    surname: "gauditz",
    office: "dortmund",
  },
  {
    forename: "agim",
    surname: "burniki",
    office: "dortmund",
  },
  {
    forename: "sascha",
    surname: "blättgen",
    office: "dortmund",
  },
  {
    forename: "susanne",
    surname: "gülikers",
    office: "dortmund",
  },
  {
    forename: "nadja",
    surname: "hogl",
    office: "dortmund",
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allColleagues);
}
