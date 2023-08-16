import { FC } from "react";
import Header from "./elements/Header";
import Main from "./elements/Main";

const MyBookings: FC = () => {
  return (
    <div className="col-span-full flex h-fit w-full flex-col items-center rounded-xl border-8 border-emerald-900/50 sm:col-start-3 sm:col-end-11 lg:col-start-8 lg:col-end-13 xl:col-end-12 2xl:col-start-6 2xl:col-end-8">
      <Header />
      <Main />
    </div>
  );
};

export default MyBookings;
