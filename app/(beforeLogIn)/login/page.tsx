import { FC } from "react";
import Form from "./components/Form";

const Page: FC = () => {
  return (
    <div className="bg-leafs flex h-full w-full flex-col justify-between bg-slate-900">
      <div className="flex grow items-center justify-center">
        <div className="flex w-fit flex-col items-stretch justify-center gap-8 border-2">
          <h1 className="sm:text-10xl inline-block text-center font-serif text-7xl font-thin tracking-wide text-slate-300/50 sm:px-8 sm:text-9xl">
            Faggio
          </h1>
          <span className="inline-block w-fit self-end rounded-lg  bg-slate-600/50 px-4 py-2 font-bold italic text-slate-100/70">
            „Wissen, wer wann im Büro ist.“
          </span>
        </div>
      </div>
      <div className="h-3/5 rounded-t-3xl bg-slate-700">
        <Form />
      </div>
    </div>
  );
};

export default Page;
