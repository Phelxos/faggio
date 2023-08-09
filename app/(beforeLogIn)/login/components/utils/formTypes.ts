interface State {
  emailValue: string;
  passwordValue: string;
  emailError: string;
  passwordError: string;
  isValidEmail: boolean;
  isValidPassword: boolean;
  isValid: boolean;
}

type ActionType = "SET_EMAIL" | "SET_PASSWORD";

interface Action {
  type: ActionType;
  payload: string;
}

type FormIds = "email" | "password";

export type { State, Action, ActionType, FormIds };
