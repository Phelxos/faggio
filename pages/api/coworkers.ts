import ICoworker from "../../typings/interfaces/ICoworker";

const allCoworkers: ICoworker[] = [
  {
    forename: "tim",
    surname: "mueller",
    office: "dortmund",
    coworkerId: 1000,
    birtday: {
      date: 12,
      month: 11,
    },
    employmentBeginning: 2003,
    position: "Backend Developer",
  },
  {
    forename: "matthias",
    surname: "schaefer",
    office: "dortmund",
    coworkerId: 1001,
    birtday: {
      date: 4,
      month: 3,
    },
    employmentBeginning: 2020,
    position: "Frontend Developer",
  },
  {
    forename: "helena",
    surname: "bauer",
    office: "dortmund",
    coworkerId: 1002,
    birtday: {
      date: 23,
      month: 8,
    },
    employmentBeginning: 2019,
    position: "UI Designer",
  },
  {
    forename: "berkan",
    surname: "yilmaz",
    office: "dortmund",
    coworkerId: 1003,
    birtday: {
      date: 21,
      month: 2,
    },
    employmentBeginning: 2012,
    position: "UI Designer",
  },
  {
    forename: "pieree",
    surname: "giroud",
    office: "dortmund",
    coworkerId: 1004,
    birtday: {
      date: 9,
      month: 8,
    },
    employmentBeginning: 2007,
    position: "UX Designer",
  },
  {
    forename: "arnold",
    surname: "schmal",
    office: "dortmund",
    coworkerId: 1005,
    birtday: {
      date: 16,
      month: 6,
    },
    employmentBeginning: 2021,
    position: "Copywriter",
  },
  {
    forename: "willem",
    surname: "van utrecht",
    office: "dortmund",
    coworkerId: 1006,
    birtday: {
      date: 28,
      month: 7,
    },
    employmentBeginning: 2017,
    position: "Project Manager",
  },
  {
    forename: "sanji",
    surname: "gupta",
    office: "dortmund",
    coworkerId: 1007,
    birtday: {
      date: 21,
      month: 2,
    },
    employmentBeginning: 2014,
    position: "Project Manager",
  },
  {
    forename: "nils",
    surname: "danzig",
    office: "dortmund",
    coworkerId: 1008,
    birtday: {
      date: 19,
      month: 11,
    },
    employmentBeginning: 2022,
    position: "Product Owner",
  },
  {
    forename: "seren",
    surname: "kemal",
    office: "dortmund",
    coworkerId: 1009,
    birtday: {
      date: 30,
      month: 4,
    },
    employmentBeginning: 2017,
    position: "Team Lead",
  },
  {
    forename: "wassili",
    surname: "neustadt",
    office: "dortmund",
    coworkerId: 1010,
    birtday: {
      date: 18,
      month: 10,
    },
    employmentBeginning: 2020,
    position: "Frontend Developer",
  },
  {
    forename: "susanne",
    surname: "humpert",
    office: "dortmund",
    coworkerId: 1011,
    birtday: {
      date: 21,
      month: 5,
    },
    employmentBeginning: 2018,
    position: "Copywriter",
  },
  {
    forename: "lisa",
    surname: "klaus",
    office: "dortmund",
    coworkerId: 1012,
    birtday: {
      date: 29,
      month: 6,
    },
    employmentBeginning: 2011,
    position: "UI Designer",
  },
];

export default function handler(req: any, res: any) {
  res.status(200).json(allCoworkers);
}
