import { FC } from "react";
import Form from "./components/Form/Form";
import Title from "./components/Title";

const Page: FC = () => {
  return (
    <div className="bg-leafs flex h-full w-full flex-col items-center justify-between bg-slate-900">
      <Title />
      <Form />
    </div>
  );
};

export default Page;
