import TIcon from "../../../../../typings/types/TIcon";
import { State, ActionType, FormIds } from "./formTypes";

const initialState: State = {
  emailValue: "",
  passwordValue: "",
  emailError: "",
  passwordError: "",
  isValidEmail: false,
  isValidPassword: false,
  isValid: false,
};

const regex = {
  email: /[a-zA-Z]+@unternehmen.de$/,
  password: /[a-zA-Z]{6,32}/,
};

const errorMessages = {
  email:
    "Bitte geben Sie eine gültige E-Mail-Adresse ein. Sie muss auf '@unternehmen.de' enden.",
  password:
    "Bitte geben Sie ein gültiges Kennwort ein. Es muss mindestens sechs und höchstens 32 Zeichen lang sein.",
};

const payloadCases: { [key: string]: ActionType } = {
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
};

const formIds: { [key: string]: FormIds } = {
  email: "email",
  password: "password",
};

interface InputData {
  [key: string]: {
    id: FormIds;
    label: string;
    placeholder: string;
    icon: TIcon;
    actionType: ActionType;
    type?: string;
    prefilledValue?: string;
  };
}

const inputData: InputData = {
  email: {
    id: formIds.email,
    label: "E-Mail-Adresse",
    placeholder: "volker@unternehmen.de",
    icon: "envelope",
    actionType: payloadCases.SET_EMAIL,
    prefilledValue: "@unternehmen.de",
  },
  password: {
    id: formIds.password,
    label: "Kennwort",
    placeholder: "nurderbvb09!",
    icon: "key",
    actionType: payloadCases.SET_PASSWORD,
    type: "password",
  },
};

export { initialState, regex, errorMessages, payloadCases, inputData, formIds };
