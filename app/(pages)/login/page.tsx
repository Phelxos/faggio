import { FC } from "react";
import Form from "./components/Form";

const Page: FC = () => {
  return (
    <div className="bg-leafs flex h-full w-full flex-col justify-between bg-slate-900">
      <div className="flex flex-col gap-6 px-6 py-4">
        <h1 className="font-serif text-8xl font-thin tracking-wide text-slate-300/50">
          Faggio
        </h1>
        <span className="self-end rounded-lg bg-slate-600/50 px-4 py-2 font-bold italic text-slate-100/70">
          „Wissen, wer wann im Büro ist.“
        </span>
      </div>
      <div className="h-3/5 rounded-t-3xl bg-slate-700">
        <Form />
      </div>
    </div>
  );
};

export default Page;
