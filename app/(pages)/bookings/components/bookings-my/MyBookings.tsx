import { FC } from "react";
import Header from "./elements/Header";
import Main from "./elements/Main";

const MyBookings: FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-xl border-8 border-emerald-900/50">
      <Header />
      <Main />
    </div>
  );
};

export default MyBookings;
