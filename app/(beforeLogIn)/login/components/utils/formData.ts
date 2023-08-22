import { Message } from "../../../../../stores/SToast";
import { State, ActionType, Input, InputData } from "./formTypes";

const initialState: State = {
  values: {
    email: "",
    password: "",
  },
  errors: {
    email: null,
    password: null,
  },
  isValid: {
    form: false,
    email: false,
    password: false,
  },
};

const regex = {
  EMAIL: /[a-zA-Z]+@unternehmen.de$/,
  PASSWORD: /[a-zA-Z]{6,32}/,
};

const errorMessages: { [key: string]: Message } = {
  EMAIL: {
    title: "Ungültige E-Mail-Adresse",
    description:
      "Bitte geben Sie eine gültige E-Mail-Adresse ein. Sie muss auf '@unternehmen.de' enden.",
  },
  PASSWORD: {
    title: "Ungültiges Kennwort",
    description:
      "Bitte geben Sie ein gültiges Kennwort ein. Es muss mindestens sechs und höchstens 32 Zeichen lang sein.",
  },
};

const payloadCases: { [key: string]: ActionType } = {
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
};

const inputTypes: { [key: string]: Input } = {
  EMAIL: "email",
  PASSWORD: "password",
};

const inputData: InputData = {
  email: {
    id: inputTypes.EMAIL,
    label: "E-Mail-Adresse",
    placeholder: "volker@unternehmen.de",
    icon: "envelope",
    actionType: payloadCases.SET_EMAIL,
    prefilledValue: "@unternehmen.de",
  },
  password: {
    id: inputTypes.PASSWORD,
    label: "Kennwort",
    placeholder: "nurderbvb09!",
    icon: "key",
    actionType: payloadCases.SET_PASSWORD,
    type: "password",
  },
};

export {
  initialState,
  regex,
  errorMessages,
  payloadCases,
  inputData,
  inputTypes,
};
