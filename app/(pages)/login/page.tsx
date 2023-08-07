import { FC } from "react";
import Form from "./components/Form";

const Page: FC = () => {
  return (
    <div className="bg-leafs flex h-full w-full flex-col justify-end bg-slate-900">
      <div className="h-2/3 rounded-t-3xl bg-slate-700 px-4 pt-9">
        <Form />
      </div>
    </div>
  );
};

export default Page;
