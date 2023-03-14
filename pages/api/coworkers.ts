import ICoworker from "../../typings/interfaces/ICoworker";

const allCoworkers: ICoworker[] = [
  {
    forename: "tim",
    surname: "mueller",
    office: "dortmund",
    coworkerId: 1000,
  },
  {
    forename: "matthias",
    surname: "schaefer",
    office: "dortmund",
    coworkerId: 1001,
  },
  {
    forename: "helena",
    surname: "bauer",
    office: "dortmund",
    coworkerId: 1002,
  },
  {
    forename: "berkan",
    surname: "yilmaz",
    office: "dortmund",
    coworkerId: 1003,
  },
  {
    forename: "pieree",
    surname: "giroud",
    office: "dortmund",
    coworkerId: 1004,
  },
  {
    forename: "arnold",
    surname: "schmal",
    office: "dortmund",
    coworkerId: 1005,
  },
  {
    forename: "willem",
    surname: "van utrecht",
    office: "dortmund",
    coworkerId: 1006,
  },
  {
    forename: "sanji",
    surname: "gupta",
    office: "dortmund",
    coworkerId: 1007,
  },
  {
    forename: "nils",
    surname: "danzig",
    office: "dortmund",
    coworkerId: 1008,
  },
  {
    forename: "seren",
    surname: "kemal",
    office: "dortmund",
    coworkerId: 1009,
  },
  {
    forename: "wassili",
    surname: "neustadt",
    office: "dortmund",
    coworkerId: 1010,
  },
  {
    forename: "susanne",
    surname: "humpert",
    office: "dortmund",
    coworkerId: 1011,
  },
  {
    forename: "lisa",
    surname: "klaus",
    office: "dortmund",
    coworkerId: 1012,
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allCoworkers);
}
