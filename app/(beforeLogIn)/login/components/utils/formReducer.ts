import { regex, errorMessages, payloadCases, initialState } from "./formData";
import type { State, Action } from "./formTypes";

const formReducer: (state: State, action: Action) => State = (
  state,
  action
) => {
  let newState;
  const { SET_EMAIL, SET_PASSWORD } = payloadCases;

  switch (action.type) {
    case SET_EMAIL: {
      const isEmailError = !regex.EMAIL.test(action.payload);
      newState = {
        ...state,
        values: {
          ...state.values,
          email: action.payload,
        },
        errors: {
          ...state.errors,
          email: isEmailError ? errorMessages.EMAIL : null,
        },
      };
      break;
    }
    case SET_PASSWORD: {
      const isPasswordError = !regex.PASSWORD.test(action.payload);
      newState = {
        ...state,
        values: {
          ...state.values,
          password: action.payload,
        },
        errors: {
          ...state.errors,
          password: isPasswordError ? errorMessages.PASSWORD : null,
        },
      };
      break;
    }
    case "SUBMIT": {
      newState = { ...initialState };
      break;
    }
    default:
      newState = state;
  }

  newState.isValid.email = !newState.errors.email;
  newState.isValid.password = !newState.errors.password;
  newState.isValid.form = newState.isValid.email && newState.isValid.password;

  return newState;
};

export default formReducer;
