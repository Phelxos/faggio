"use client";

import { useRouter } from "next/navigation";
import { FC, useReducer, useRef } from "react";
import InputField from "./elements/InputField";
import SubmitButton from "./elements/SubmitButton";
import { initialState, inputData } from "../utils/formData";
import reducer from "../utils/formReducer";
import { Input } from "../utils/formTypes";
import useToast, { Message } from "../../../../../stores/SToast";

const Form: FC = () => {
  const [{ isValid, values, errors }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { showToast } = useToast();

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch({
      type: inputData[e.target.id as Input].actionType,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid.form) {
      const errorMessages: Message[] = [];
      for (const error in errors) {
        if (errors[error as Input] === null) continue;
        errorMessages.push(errors[error as Input]!);
      }
      showToast(errorMessages);
      return;
    }
    router.push("/home");
  };

  return (
    <div className="h-3/5 w-full rounded-t-3xl bg-slate-700 lg:w-1/2 xl:h-1/2">
      <form
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        className="relative flex h-full flex-col gap-6 px-6 pt-10"
        ref={formRef}
      >
        <InputField
          placeholder={inputData.email.placeholder}
          id={inputData.email.id}
          label={inputData.email.label}
          icon={inputData.email.icon}
          inputValue={values.email}
          setInputValue={dispatch}
          prefilledValue={inputData.email.prefilledValue}
          isValid={isValid.email}
        />
        <InputField
          type={inputData.password.type}
          placeholder={inputData.password.placeholder}
          id={inputData.password.id}
          label={inputData.password.label}
          icon={inputData.password.icon}
          inputValue={values.password}
          isValid={isValid.password}
        />
        <SubmitButton isValid={isValid.form} />
      </form>
    </div>
  );
};

export default Form;
