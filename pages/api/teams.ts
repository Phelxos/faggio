import IColleague from "../../typings/interfaces/IColleague";

const allColleagues: IColleague[] = [
  {
    forename: "tim",
    surname: "mueller",
    office: "dortmund",
    id: 1000,
  },
  {
    forename: "matthias",
    surname: "schaefer",
    office: "dortmund",
    id: 1001,
  },
  {
    forename: "helena",
    surname: "bauer",
    office: "dortmund",
    id: 1002,
  },
  {
    forename: "berkan",
    surname: "yilmaz",
    office: "dortmund",
    id: 1003,
  },
  {
    forename: "pieree",
    surname: "giroud",
    office: "dortmund",
    id: 1004,
  },
  {
    forename: "arnold",
    surname: "schmal",
    office: "dortmund",
    id: 1005,
  },
  {
    forename: "willem",
    surname: "van utrecht",
    office: "dortmund",
    id: 1006,
  },
  {
    forename: "sanji",
    surname: "gupta",
    office: "dortmund",
    id: 1007,
  },
  {
    forename: "nils",
    surname: "danzi",
    office: "dortmund",
    id: 1008,
  },
  {
    forename: "seren",
    surname: "kemal",
    office: "dortmund",
    id: 1009,
  },
  {
    forename: "wassili",
    surname: "neustadt",
    office: "dortmund",
    id: 1010,
  },
  {
    forename: "susanne",
    surname: "humpert",
    office: "dortmund",
    id: 1011,
  },
  {
    forename: "lisa",
    surname: "klaus",
    office: "dortmund",
    id: 1012,
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allColleagues);
}
