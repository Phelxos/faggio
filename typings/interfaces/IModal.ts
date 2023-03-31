export default interface IModal {
  isDisplayingModal: boolean;
  toggleModal: () => void;
  title?: string;
  descriptionShort?: string;
  descriptionLong?: string;
  buttonAcceptLabel?: string;
  onButtonAcceptClick?: () => void;
  buttonDeclineLabel?: string;
  onButtonDeclineClick?: () => void;
}
