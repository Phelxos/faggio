import TLocation from "../../typings/types/TOffices";

const offices: { office: TLocation }[] = [
  { office: "dortmund" },
  { office: "cologne" },
  { office: "hamburg" },
  { office: "berlin" },
  { office: "frankfurt" },
  { office: "munich" },
];
export default function handler(req: any, res: any) {
  res.status(200).json(offices);
}
