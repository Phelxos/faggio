type TOffices =
  | "cologne"
  | "dortmund"
  | "hamburg"
  | "berlin"
  | "frankfurt"
  | "munich";

export type TOfficesGerman =
  | "köln"
  | "dortmund"
  | "hamburg"
  | "berlin"
  | "frankfurt"
  | "münchen";

export enum EOfficesEnglishToGerman {
  cologne = "köln",
  dortmund = "dortmund",
  hamburg = "hamburg",
  berlin = "berlin",
  frankfurt = "frankfurt",
  munich = "münchen",
}

export enum EOfficesGermanToEnglish {
  "köln" = "cologne",
  dortmund = "dortmund",
  hamburg = "hamburg",
  berlin = "berlin",
  frankfurt = "frankfurt",
  "münchen" = "munich",
}

export default TOffices;
