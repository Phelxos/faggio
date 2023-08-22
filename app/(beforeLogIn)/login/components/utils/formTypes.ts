import TIcon from "../../../../../typings/types/TIcon";
import { Message } from "../../../../../stores/SToast";

interface State {
  values: {
    email: string;
    password: string;
  };
  errors: {
    email: Message | null;
    password: Message | null;
  };
  isValid: {
    form: boolean;
    email: boolean;
    password: boolean;
  };
}

type ActionType = "SET_EMAIL" | "SET_PASSWORD" | "SUBMIT";

interface Action {
  type: ActionType;
  payload: string;
}

type Input = "email" | "password";

interface InputData {
  [key: string]: {
    id: Input;
    label: string;
    placeholder: string;
    icon: TIcon;
    actionType: ActionType;
    type?: string;
    prefilledValue?: string;
  };
}

export type { State, Action, ActionType, Input, InputData };
