export type targetedFormat = "month" | "date" | "day";

export type mainInput = number | string;

export interface Props {
  mainInput: mainInput;
  targetedFormat: targetedFormat;
  startsCountingAtZero: boolean;
}
