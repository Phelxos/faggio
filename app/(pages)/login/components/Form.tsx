"use client";

import { FC } from "react";
import InputField from "./InputField";

const Form: FC = () => {
  return (
    <form className="flex flex-col gap-6">
      <InputField
        placeholder="volker@adesso.de"
        id="email-adress"
        label="E-Mail-Adresse"
        icon="envelope"
      />
      <InputField
        type="password"
        placeholder="nurderbvb09!"
        id="password"
        label="Kennwort"
        icon="key"
      />
    </form>
  );
};

export default Form;
