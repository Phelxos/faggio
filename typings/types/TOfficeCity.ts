type TOfficeCity =
  | "cologne"
  | "dortmund"
  | "hamburg"
  | "berlin"
  | "frankfurt"
  | "munich"
  | "bremen"
  | "leipzig";

export type TOfficeCityGerman =
  | "köln"
  | "dortmund"
  | "hamburg"
  | "berlin"
  | "frankfurt"
  | "münchen"
  | "bremen"
  | "leipzig";

export enum EOfficesEnglishToGerman {
  cologne = "köln",
  dortmund = "dortmund",
  hamburg = "hamburg",
  berlin = "berlin",
  frankfurt = "frankfurt",
  munich = "münchen",
  leipzig = "leipzig",
  bremen = "bremen",
}

export enum EOfficesGermanToEnglish {
  "köln" = "cologne",
  dortmund = "dortmund",
  hamburg = "hamburg",
  berlin = "berlin",
  frankfurt = "frankfurt",
  "münchen" = "munich",
  leipzig = "leipzig",
  bremen = "bremen",
}

export default TOfficeCity;
