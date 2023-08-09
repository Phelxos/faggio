import { regex, errorMessages, payloadCases } from "./formData";
import type { State, Action } from "./formTypes";

const formReducer: (state: State, action: Action) => State = (
  state,
  action
) => {
  let newState;
  const { SET_EMAIL, SET_PASSWORD } = payloadCases;

  switch (action.type) {
    case SET_EMAIL: {
      newState = {
        ...state,
        emailValue: action.payload,
        emailError: regex.email.test(action.payload) ? "" : errorMessages.email,
      };
      break;
    }
    case SET_PASSWORD: {
      newState = {
        ...state,
        passwordValue: action.payload,
        passwordError: regex.password.test(action.payload)
          ? ""
          : errorMessages.password,
      };
      break;
    }
    default:
      newState = state;
  }

  newState.isValidEmail = !newState.emailError;
  newState.isValidPassword = !newState.passwordError;
  newState.isValid = newState.isValidEmail && newState.isValidPassword;

  return newState;
};

export default formReducer;
