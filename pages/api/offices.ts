import TLocation from "../../typings/types/TLocation";

const offices: { office: TLocation }[] = [
  { office: "Dortmund" },
  { office: "Cologne" },
  { office: "Hamburg" },
  { office: "Berlin" },
  { office: "Frankfurt" },
  { office: "Munich" },
];
export default function handler(req: any, res: any) {
  res.status(200).json(offices);
}
