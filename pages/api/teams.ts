import IColleague from "../../typings/interfaces/IColleague";

const allColleagues: IColleague[] = [
  {
    forename: "tim",
    surname: "mueller",
    office: "dortmund",
  },
  {
    forename: "matthias",
    surname: "schaefer",
    office: "dortmund",
  },
  {
    forename: "helena",
    surname: "bauer",
    office: "dortmund",
  },
  {
    forename: "berkan",
    surname: "yilmaz",
    office: "dortmund",
  },
  {
    forename: "pieree",
    surname: "giroud",
    office: "dortmund",
  },
  {
    forename: "arnold",
    surname: "schmal",
    office: "dortmund",
  },
  {
    forename: "willem",
    surname: "van utrecht",
    office: "dortmund",
  },
  {
    forename: "sanji",
    surname: "gupta",
    office: "dortmund",
  },
  {
    forename: "nils",
    surname: "danzi",
    office: "dortmund",
  },
  {
    forename: "seren",
    surname: "kemal",
    office: "dortmund",
  },
  {
    forename: "wassili",
    surname: "neustadt",
    office: "dortmund",
  },
  {
    forename: "susanne",
    surname: "humpert",
    office: "dortmund",
  },
  {
    forename: "lisa",
    surname: "klaus",
    office: "dortmund",
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allColleagues);
}
