"use client";

import { FC, useState, useRef } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";

const Form: FC = () => {
  const [isValid, setIsValid] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleFormChange = () => {
    setTimeout(() => setIsValid(formRef.current?.checkValidity() ?? false), 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isValid) return;
    e.preventDefault();
    setIsValid(false);
    setEmailValue("");
    setPasswordValue("");
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
        placeholder="volker@unternehmen.de"
        id="email-adress"
        label="E-Mail-Adresse"
        icon="envelope"
        pattern="[a-zA-Z]+@unternehmen\.de$"
        inputValue={emailValue}
        setInputValue={setEmailValue}
      />
      <InputField
        type="password"
        placeholder="nurderbvb09!"
        id="password"
        label="Kennwort"
        icon="key"
        pattern="[a-zA-Z]{6,32}"
        inputValue={passwordValue}
        setInputValue={setPasswordValue}
      />
      <SubmitButton isValid={isValid} />
    </form>
  );
};

export default Form;
