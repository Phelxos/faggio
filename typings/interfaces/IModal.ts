export default interface IModal {
  title?: string;
  descriptionShort?: string;
  descriptionLong?: string;
  buttonAcceptLabel?: string;
  onButtonAcceptClick?: () => void;
  buttonDeclineLabel?: string;
  onButtonDeclineClick?: () => void;
}
