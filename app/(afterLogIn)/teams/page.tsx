import { FC } from "react";
import Control from "./components/control/Control";
import ListView from "./components/list/List";

const Page: FC = () => {
  return (
    <>
      <ListView />
      <Control />
    </>
  );
};

export default Page;
