import { FC } from "react";
import Control from "./components/control/Control";
import ListView from "./components/list/List";

const Page: FC = () => {
  return (
    <>
      <div className="flex w-full grow flex-col items-center gap-8">
        <ListView />
        <Control />
      </div>
    </>
  );
};

export default Page;
