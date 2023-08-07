import { FC } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Card from "./components/card/Card";

const Page: FC = () => {
  return (
    <div className="flex w-full grow flex-col items-center gap-16">
      <div className="w-full">
        <Header />
        <div className="to-transpartent bg-gradient-to-b from-amber-700">
          <Map />
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Page;
