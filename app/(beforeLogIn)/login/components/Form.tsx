"use client";

import { useRouter } from "next/navigation";
import { FC, useReducer, useRef } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { formIds, initialState, inputData, regex } from "./utils/formData";
import reducer from "./utils/formReducer";
import { FormIds } from "./utils/formTypes";

const Form: FC = () => {
  const [
    {
      isValid,
      emailValue,
      passwordValue,
      emailError,
      passwordError,
      isValidEmail,
      isValidPassword,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch({
      type: inputData[e.target.id as FormIds].actionType,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    for (const formId in formIds) {
      dispatch({
        type: inputData[formId].actionType,
        payload: "",
      });
    }
    router.push("/home");
  };

  return (
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
        inputValue={emailValue}
        setInputValue={dispatch}
        prefilledValue={inputData.email.prefilledValue}
        isValid={isValidEmail}
      />
      <InputField
        type={inputData.password.type}
        placeholder={inputData.password.placeholder}
        id={inputData.password.id}
        label={inputData.password.label}
        icon={inputData.password.icon}
        inputValue={passwordValue}
        isValid={isValidPassword}
      />
      <SubmitButton isValid={isValid} />
    </form>
  );
};

export default Form;
